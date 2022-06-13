/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRedirect = /* GraphQL */ `
  mutation CreateRedirect(
    $input: CreateRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    createRedirect(input: $input, condition: $condition) {
      id
      emojis
      external
      createdAt
      updatedAt
    }
  }
`;
export const updateRedirect = /* GraphQL */ `
  mutation UpdateRedirect(
    $input: UpdateRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    updateRedirect(input: $input, condition: $condition) {
      id
      emojis
      external
      createdAt
      updatedAt
    }
  }
`;
export const deleteRedirect = /* GraphQL */ `
  mutation DeleteRedirect(
    $input: DeleteRedirectInput!
    $condition: ModelRedirectConditionInput
  ) {
    deleteRedirect(input: $input, condition: $condition) {
      id
      emojis
      external
      createdAt
      updatedAt
    }
  }
`;
