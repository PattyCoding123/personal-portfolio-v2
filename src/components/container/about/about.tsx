import { z } from "zod";

import ContainerWrapper from "../../wrapper/container-wrapper";
import MotionWrapper from "../../wrapper/motion-wrapper";
import AboutCard from "./about-card";
import { client, urlFor } from "@/lib/sanityClient";
import { aboutsSchema } from "@/lib/validators/abouts-validator";

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
      throw new Error("Invalid abouts data");
    }
  }
};

export default async function About() {
  const abouts = await getAbouts();

  return (
    <ContainerWrapper id="about" className="bg-background">
      <MotionWrapper className="flex w-full flex-col">
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-foreground 3xl:text-[4rem] xs:text-[2rem]">
          I love to<span className="text-blue-500"> code</span>
          <br /> and <span className="text-blue-500"> solve problems</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-start justify-center">
          {abouts?.map((about, index) => (
            <AboutCard
              key={`${about.title} ${index}`}
              imageUrl={urlFor(about.imgUrl).url()}
              title={about.title}
              description={about.description}
            />
          ))}
        </div>
      </MotionWrapper>
    </ContainerWrapper>
  );
}
