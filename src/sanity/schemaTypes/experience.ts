import { defineArrayMember, defineField, defineType } from "sanity";

const workExperience = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "text" }),
  ],
});

const experiences = defineType({
  name: "experiences",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "works",
      title: "Works",
      type: "array",
      of: [defineArrayMember({ type: "workExperience" })],
    }),
  ],
});

export { workExperience, experiences };
