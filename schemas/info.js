export default {
  // computer name
  name: 'info',
  // visible title
  title: 'Info Page',
  type: 'document',

  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'firstCopy',
      title: 'First Copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'secondCopy',
      title: 'Second Copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'bslvid',
      title: 'BSL Video Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
};
