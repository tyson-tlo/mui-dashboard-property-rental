import { createContext, useContext, useReducer } from "react";
import generateRentalsSummaryData from "../../../../test/data/generateRentalsSummaryData";

const RentalsSummaryContext = createContext();

const rentalsSummaryReducer = (state, action) => {
  switch (action.type) {
    case "SET_RENTAL_SUMMARY":
      return {
        ...state,
        rentalSummary: action.payload,
      };
    default:
      return state;
  }
};

function RentalsSummaryProvider({ children }) {
  const [state, dispatch] = useReducer(rentalsSummaryReducer, {
    rentals: generateRentalsSummaryData(13),
  });

  const value = {
    rentals: state.rentals,
    reloadSummary: (summary) =>
      dispatch({ type: "SET_RENTAL_SUMMARY", payload: summary }),
  };

  return (
    <RentalsSummaryContext.Provider value={value}>
      {children}
    </RentalsSummaryContext.Provider>
  );
}

export function useRentalsSummaryProvider() {
  const context = useContext(RentalsSummaryContext);
  if (context === undefined) {
    throw new Error(
      "useRentalSummaryProvider must be used within a RentalsSummaryProvider"
    );
  }
  return context;
}

export default RentalsSummaryProvider;
