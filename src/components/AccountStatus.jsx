import React from "react";
import { useSelector } from "react-redux";

export const AccountStatus = () => {
  const { isSavingsAccount } = useSelector(
    ({ bankingReducer: { isSavingsAccount } }) => ({
      isSavingsAccount,
    })
  );
  return <div>{isSavingsAccount ? <h1>Savings</h1> : <h1>Checking</h1>}</div>;
};
