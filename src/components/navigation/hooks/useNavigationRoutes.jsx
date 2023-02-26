import { useNavigate } from "react-router-dom";

function useNavigationRoutes() {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("/login");
  };

  const dashboard = () => {
    navigate("/");
  };

  const rentals = () => {
    navigate("/rentals");
  };

  const rental = (id) => {
    return () => {
      navigate(`/rentals/${id}`);
    };
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
    signup,
    login,
    dashboard,
    settings,
    rentals,
    rental,
    applications,
    requests,
    tasks,
  };
}

export default useNavigationRoutes;
