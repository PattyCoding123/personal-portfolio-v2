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
    <ContainerWrapper id="about" className="app__whitebg">
      <MotionWrapper className="flex w-full flex-col">
        <h2 className="head-text">
          I love to<span> code</span>
          <br /> and <span> solve problems</span>
        </h2>
        <div className="app__profiles">
          {abouts?.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={`${about.title} ${index}`}
            >
              <img src={urlFor(about.imgUrl).url()} alt={about.title} />
              <h2 className="bold-text mt-5">{about.title}</h2>
              <p className="p-text mt-[10px]">{about.description}</p>
            </motion.div>
          ))}
        </div>
      </MotionWrapper>
    </ContainerWrapper>
  );
}
