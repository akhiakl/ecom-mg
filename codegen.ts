import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  schema: process.env.ECOM_BACKEND_API_URL,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/types/ecom.ts": {
      plugins: ["typescript"],
      config: {
        avoidOptionals: true,
      },
    },
  },
};

export default config;
