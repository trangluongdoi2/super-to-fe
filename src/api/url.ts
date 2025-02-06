export const LOCAL_SERVER_URL = 'http://localhost:4000';
export const PROD_SERVER_URL = 'https://www.server.xxxxx.com';
export const API_URL = process.env.NODE_ENV === 'production' ? PROD_SERVER_URL : LOCAL_SERVER_URL;
