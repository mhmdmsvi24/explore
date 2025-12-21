import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const config = {
  port: process.env.PORT,
  unsplash: {
    api_key: process.env.UNSPLASH_API_KEY
  },
};

export default config;
