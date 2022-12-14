import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/claubeiyi1trq01t120wyc9bh/master',
  documents: './src/graphql/queries.ts',
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
    },
  },
};

export default config;
