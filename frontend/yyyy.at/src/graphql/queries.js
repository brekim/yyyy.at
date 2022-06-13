/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRedirect = /* GraphQL */ `
  query GetRedirect($id: ID!) {
    getRedirect(id: $id) {
      id
      emojis
      external
      createdAt
      updatedAt
    }
  }
`;
export const listRedirects = /* GraphQL */ `
  query ListRedirects(
    $filter: ModelRedirectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRedirects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        emojis
        external
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
