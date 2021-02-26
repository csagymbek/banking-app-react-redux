import React from "react";
import { AccountStatus } from "./components/AccountStatus";
import { Auth } from "./components/Auth";
import Balance from "./components/Balance";
import { Banking } from "./components/Banking";

export const App = () => {
  return (
    <div className="app">
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};
