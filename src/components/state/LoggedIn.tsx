import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function LoggedIn() {
  const userContext = useContext(UserContext);
  const handleAuth = () => {
    //! No need to check userContext whether it is null or not, coz of inital value as {}
    userContext.setUser({
      name: "Jishnu",
      email: "jishnusatheesh27@gmail.com",
    });
  };

  const handleLogOut = () => {
    userContext.setUser({
      name: "Guest",
      email: "N/A",
    });
  };

  return (
    <div>
      <h1>User name is {userContext.user?.name}</h1>
      <h1>User email is {userContext.user?.email}</h1>
      <br />
      <button onClick={() => handleAuth()}>Log In</button>
      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  );
}
