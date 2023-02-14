import { useUserProvider } from "../../../providers/UserProvider";
import "./WelcomeUser.css";

export function getPeriodAppropriateGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good evening";
  }
}

function WelcomeUser() {
  const { user } = useUserProvider();
  const greeting = getPeriodAppropriateGreeting();

  return (
    <p className="WelcomeUser">
      {greeting}, <span>{user.name}</span>
    </p>
  );
}

export default WelcomeUser;
