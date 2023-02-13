import { useNavigate } from "react-router-dom";

function useNavigationRoutes() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const dashboard = () => {
    navigate("/");
  };

  const settings = () => {
    navigate("/settings");
  };

  return {
    login,
    dashboard,
    settings,
  };
}

export default useNavigationRoutes;
