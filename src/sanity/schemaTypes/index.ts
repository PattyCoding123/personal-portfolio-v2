import { type SchemaTypeDefinition } from "sanity";
import about from "./about";
import { experiences, workExperience } from "./experience";
import project from "./project";
import skill from "./skill";

export const schemaTypes = [about, experiences, workExperience, project, skill];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
