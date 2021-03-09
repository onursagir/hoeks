import path from 'path';

export default {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testRegex: [/packages\/.*tests\/unit\/index\.[jt]sx?$/g],
  setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setup.ts')],
};
