import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './schemas/schema.js';

export default defineConfig({
  name: 'default',
  title: 'First Trimester',
  projectId: '1mkamazd',
  dataset: 'production',
  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});

// {
//   "root": true,
//   "api": {
//     "projectId": "1mkamazd",
//     "dataset": "production"
//   },
//   "project": {
//     "name": "first-trimester"
//   },
//   "plugins": [
//     "@sanity/base",
//     "@sanity/components",
//     "@sanity/default-layout",
//     "@sanity/default-login",
//     "@sanity/desk-tool",
//     "@sanity/google-maps-input"
//   ],
//   "env": {
//     "development": {
//       "plugins": ["@sanity/vision"]
//     }
//   },
//   "parts": [
//     {
//       "name": "part:@sanity/base/schema",
//       "path": "./schemas/schema"
//     }
//   ]
// }
