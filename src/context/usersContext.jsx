import { useContext, createContext } from "react";

export const UsersContext = createContext();
export const useUsersContext = () => {
  return useContext(UsersContext);
}