/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  'src/**/*.ts': ['npm run lint:fix', 'npm run format'],
  'src/**/*.scss': ['npm run lint:styles:fix', 'npm run format'],
  'src/**/*.html': ['npm run lint:fix', 'npm run format'],
};

export default config;
