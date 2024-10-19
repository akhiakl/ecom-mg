import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://www.aemshop.net/graphql",
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/types/backend": {
      plugins: ["typescript"],
      config: {
        avoidOptionals: true,
      },
    },
  },
};

export default config;
