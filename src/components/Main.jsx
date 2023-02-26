import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Applications from "./Applications/Applications";
import Dashboard from "./Dashboard/Dashboard";
import Rentals from "./Rentals/Rentals";
import Requests from "./Requests/Requests";
import Settings from "./Settings/Settings";
import Tasks from "./Tasks/Tasks";

export default function Main() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="settings/*" element={<Settings />} />
        <Route path="rentals/*" element={<Rentals />} />
        <Route path="applications/*" element={<Applications />} />
        <Route path="requests/*" element={<Requests />} />
        <Route path="tasks/*" element={<Tasks />} />
      </Routes>
    </Container>
  );
}
