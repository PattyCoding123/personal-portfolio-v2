"use client";

import { motion } from "framer-motion";
import { z } from "zod";

import { client, urlFor } from "@/lib/sanityClient";
import { aboutsSchema } from "@/lib/validators/abouts-validator";
import ContainerWrapper from "../wrapper/container-wrapper";
import MotionWrapper from "../wrapper/motion-wrapper";

const getAbouts = async () => {
  try {
    const query = '*[_type == "abouts"]';

    const data = await client
      .fetch(query)
      .then((res) => aboutsSchema.parse(res));

    /**
     * I want to sort the Abouts by title alphabetically.
     * To do so, I will call the sort method.
     */
    data.sort((a, b) => (a.title > b.title ? 1 : -1));

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Invalid data");
    }
  }
};

export default async function About() {
  const abouts = await getAbouts();

  return (
    <ContainerWrapper id="about" className="bg-background">
      <MotionWrapper className="flex w-full flex-col">
        <h2 className="3xl:text-[4rem] xs:text-[2rem] text-center text-[2.75rem] font-extrabold capitalize text-foreground">
          I love to<span className="text-blue-500"> code</span>
          <br /> and <span className="text-blue-500"> solve problems</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-start justify-center">
          {abouts?.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="3xl:w-[370px] 3xl:my-8 3xl:mx-16 m-8 flex w-[250px] flex-col items-start"
              key={`${about.title} ${index}`}
            >
              <img
                className="3xl:h-20 h-[170px] w-full rounded-2xl object-cover"
                src={urlFor(about.imgUrl).url()}
                alt={about.title}
              />
              <h2 className="3xl:text-[2rem] xs:text-[0.9rem] mt-5 text-left text-[1.25rem] font-extrabold text-foreground">
                {about.title}
              </h2>
              <p className="3xl:text-[1.75rem] mt-[10px] text-left text-[1.25rem] leading-normal text-foreground/80">
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </MotionWrapper>
    </ContainerWrapper>
  );
}
