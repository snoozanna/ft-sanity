export default {
  // computer name
  name: "participate",
  // visible title
  title: "Who can participate?",
  type: "document",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bslvid",
      title: "BSL Video Link",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "heading",

    },
  },
};
