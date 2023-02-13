import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const userContextReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      throw new Error("Invalid action type");
  }
};

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userContextReducer, {
    user: {
      name: "John Doe",
    },
  });

  const login = (user) => {
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <UserContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserProvider() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider");
  }
  return context;
}

export default UserProvider;
