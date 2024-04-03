import path from 'path';

import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    verbose: true,
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
    modulePaths: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    rootDir: '../../',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    }
};

export default config;