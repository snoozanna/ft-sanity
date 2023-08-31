export default {
  // computer name
  name: "FAQ",
  // visible title
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Question Number",
      type: "number",
    },
    {
      name: "question",
      title: "Question",
      type: "string",
    },

    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqCategories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqCategory" }] }],
      validation: (Rule) => Rule.required().warning("Please choose a category"),
    },
    {
      name: "bslvid",
      title: "BSL Video Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "number",
      subtitle: "question",
    },
  },
};
