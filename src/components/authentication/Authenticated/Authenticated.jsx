import TopNavigation from "../../navigation/TopNavigation/TopNavigation";
import "./Authenticated.css";

function Authenticated({ children }) {
  return (
    <div className="Authenticated">
      <TopNavigation />
      <div className="container">{children}</div>
    </div>
  );
}

export default Authenticated;
