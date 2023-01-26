import { createContext, useReducer } from "react";
import { reducer } from "./reducer.js";

export const GlobalContext = createContext("Initial Value");

let data = {
  setupScreenCounter: 1,
  testing: "context is working globally",
  setupFormData: {
    role: "",
    product: "",
    targetMarketSegments: {
      //   industry: "",
      //   revenueSize: "",
      //   employee: "",
      //   geography: "",
      // },
      //  {
      //   OperatesIn: "Seventeen countries",
      //   FoundedOn: "September 15, 1987",
      //   products: "20+",
      //   employees: "5000+",
      //   revenue: "¥636.8 billion (US$99.9 billion)",
      //   stockPriceToday: "3.5900 (+2.57%)",
      // },
    },
  },
  darkTheme: true,
  userID: null,
  companySearchQueryData: [],
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
