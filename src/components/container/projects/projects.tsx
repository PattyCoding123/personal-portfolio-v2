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

  return <></>;
}
