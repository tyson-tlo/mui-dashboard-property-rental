import { useUserProvider } from "../../../providers/UserProvider";
import "./WelcomeUser.css";

function WelcomeUser() {
  const { user } = useUserProvider();

  return (
    <p className="WelcomeUser">
      Welcome, <span>{user.name}</span>
    </p>
  );
}

export default WelcomeUser;
