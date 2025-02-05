import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Export the environment variables for use in other files
export const config = {
  API_KEY: process.env.X_API_KEY!,
  API_SECRET_KEY: process.env.X_API_SECRET_KEY!,
  ACCESS_TOKEN: process.env.X_ACCESS_TOKEN!,
  ACCESS_TOKEN_SECRET: process.env.X_ACCESS_TOKEN_SECRET!,
  BEARER_TOKEN: process.env.X_BEARER_TOKEN!,
};
