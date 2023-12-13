import { useState, createContext } from "react";

const ToggleContext = createContext();
export default function ToggleProvider({ children }) {
  const [account, setToggleAccount] = useState("account");

  function toggleAccount() {
    setToggleAccount(account === "account" ? "account-show" : "account");
  }
  const value = {
    account,
    toggleAccount,
  };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
}
export { ToggleContext, ToggleProvider };
