/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const helloWorld = /* GraphQL */ `
  query HelloWorld($msg: String) {
    helloWorld(msg: $msg) {
      statusCode
      returnMessage
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      owner
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $id: ID
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodos(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        owner
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodosSortedByName = /* GraphQL */ `
  query ListTodosSortedByName(
    $name: String!
    $owner: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodosSortedByName(
      name: $name
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        updatedAt
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
