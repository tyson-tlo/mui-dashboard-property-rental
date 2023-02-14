import { useNavigate } from "react-router-dom";

function useNavigationRoutes() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const dashboard = () => {
    navigate("/");
  };

  const rentals = () => {
    navigate("/rentals");
  };

  const applications = () => {
    navigate("/applications");
  };

  const requests = () => {
    navigate("/requests");
  };

  const tasks = () => {
    navigate("/tasks");
  };

  const settings = () => {
    navigate("/settings");
  };

  return {
    login,
    dashboard,
    settings,
    rentals,
    applications,
    requests,
    tasks,
  };
}

export default useNavigationRoutes;
