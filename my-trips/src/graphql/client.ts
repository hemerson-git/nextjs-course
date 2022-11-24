import { GraphQLClient } from 'graphql-request';

const endpoint = String(process.env.GCMS);

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GCMS_AUTH_TOKEN}`,
  },
});
