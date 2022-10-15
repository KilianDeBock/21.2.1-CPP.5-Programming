import { gql } from "@apollo/client";

export const GET_ALL_ACCOUNTS = gql`
  query Accounts {
    accounts {
      id
      email
    }
  }
`;

export const GET_ACCOUNT = gql`
  query GetAccount($id: ID!) {
    account(id: $id) {
      id
      email
    }
  }
`;
