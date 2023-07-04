import ContainerWrapper from "@/components/wrapper/container-wrapper";
import MotionWrapper from "@/components/wrapper/motion-wrapper";
import ProjectsFilter from "./projects-filter";
import { client } from "@/lib/sanityClient";
import { projectsSchema } from "@/lib/validators/projects-validator";
import { z } from "zod";

const getProjects = async () => {
  try {
    const query = '*[_type == "projects"]';

    const data = await client
      .fetch(query)
      .then((res) => projectsSchema.parse(res));

    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Invalid abouts data");
    }
  }
};
export default async function Projects() {
  const projects = await getProjects();

  return (
    <ContainerWrapper
      id="projects"
      className="bg-background-secondary dark:bg-background"
    >
      <MotionWrapper className="w-full flex-1 flex-col">
        <h2 className="text-center text-[2.75rem] font-extrabold capitalize text-foreground 3xl:text-[4rem] xs:text-[2rem]">
          My <span className="text-blue-500"> Projects </span> Section{" "}
        </h2>
        <ProjectsFilter projects={projects} />
      </MotionWrapper>
    </ContainerWrapper>
  );
}
