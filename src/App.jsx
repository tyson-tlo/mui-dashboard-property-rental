import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/router";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
