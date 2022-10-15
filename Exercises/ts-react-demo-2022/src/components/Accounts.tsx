import React from "react";
import { AccountsData } from "../inderfaces";
import { Button } from "./Button";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_ACCOUNTS } from "../graphql/accounts";

type AccountsProps = {};

export const Accounts = ({}: AccountsProps) => {
  // const { loading, error, data } = useQuery<AccountsData>(GET_ALL_ACCOUNTS, {
  //   fetchPolicy: "cache-first",
  // });

  const [getAccounts, { loading, error, data }] =
    useLazyQuery<AccountsData>(GET_ALL_ACCOUNTS);

  // const [getAccount, { loading, error, data }] = useLazyQuery<
  //   AccountsData,
  //   AccountVars
  // >(GET_ACCOUNT);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ul>
        {data?.accounts?.map((account, i) => (
          <li key={i}>
            Account with email: {account.email} id: {account.id}
          </li>
        ))}
      </ul>

      {/*<ul>*/}
      {/*  <li>{data?.account.email}</li>*/}
      {/*</ul>*/}

      {/*<Button*/}
      {/*  onClick={() =>*/}
      {/*    getAccount({*/}
      {/*      variables: {*/}
      {/*        id: "ckucfdvq87gl60c04yth6aqbt",*/}
      {/*      },*/}
      {/*    })*/}
      {/*  }*/}
      {/*>*/}

      <Button onClick={() => getAccounts()}>Get accounts</Button>
    </>
  );
};
