export default {
  // computer name
  name: 'faqCategory',
  // visible title
  title: 'FAQ Category',
  type: 'document',

  fields: [
    {
      name: 'category',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'bslvid',
      title: 'BSL Video Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
};
