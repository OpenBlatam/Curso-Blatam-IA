export * from './getBg';
export * from './getBgGradient';
export * from './getLayoutHeight';
export * from './getWebsite';
export * from './selectedLink';


/**
 * Generate a unique ID for objects locally.
 * @returns unique ID as a string.
 * @description NOTE: To be used for testing, DON'T USE IN PROD.
 */
export const getUniqueID = (): string =>
    Math.random().toString(36).substr(2, 9);