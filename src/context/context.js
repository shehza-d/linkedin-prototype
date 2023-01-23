import { createContext, useReducer } from "react";
import { reducer } from "./reducer.js";

export const GlobalContext = createContext("Initial Value");

let data = {
  setupScreenCounter: 1,
  testing: "context is working globally",
  setupFormData: {
    role: "",
    company: "",
    product: "",
    industry: "",
    revenueSize: "",
    employee: "",
    geography: "",
  },
  darkTheme: true,
  user: {},
  isLogin: null,
  baseUrl: window.location.href.includes("localhost")
    ? `http://localhost:5001/api/v1`
    : `/api/v1`,
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
