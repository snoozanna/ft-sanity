// import { GrSteps as icon } from 'react-icons/md';

export default {
  // computer name
  name: "steps",
  // visible title
  title: "Process Steps",
  type: "document",
  // icon,
  fields: [
    {
      name: "stepNumber",
      title: "Step Number",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "explanation",
      title: "Explanation",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
