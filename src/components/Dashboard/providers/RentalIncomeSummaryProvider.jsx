import { createContext, useContext, useReducer } from "react";
import generateRecentPaymentsData from "../../../../test/data/generateRecentPaymentsData";

const RentalIcomeSummaryContext = createContext();

const rentalIncomeSummaryReducer = (state, action) => {
  switch (action.type) {
    case "SET_RENTAL_INCOME_SUMMARY":
      return {
        ...state,
        rentalIncomeSummary: action.payload,
      };
    default:
      return state;
  }
};

const recentPayments = generateRecentPaymentsData();
const totalIncome = recentPayments.reduce(
  (acc, payment) => acc + Number(payment.amount),
  0
);
const totalIncomeFormatted = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(totalIncome);

function RentalIncomeSummaryProvider({ children }) {
  const [state, dispatch] = useReducer(rentalIncomeSummaryReducer, {
    rentalIncomeSummary: {
      totalIncome: totalIncomeFormatted,
      recentPayments: recentPayments,
    },
  });

  const value = {
    summary: state.rentalIncomeSummary,
    reloadSummary: (summary) =>
      dispatch({ type: "SET_RENTAL_INCOME_SUMMARY", payload: summary }),
  };

  return (
    <RentalIcomeSummaryContext.Provider value={value}>
      {children}
    </RentalIcomeSummaryContext.Provider>
  );
}

export function useRentalIncomeSummaryProvider() {
  const context = useContext(RentalIcomeSummaryContext);
  if (context === undefined) {
    throw new Error(
      "useRentalIncomeSummaryProvider must be used within a RentalIncomeSummaryProvider"
    );
  }
  return context;
}

export default RentalIncomeSummaryProvider;
