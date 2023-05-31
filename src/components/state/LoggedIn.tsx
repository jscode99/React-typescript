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

  return (
    <div>
      <h1>User email is {userContext.user?.email}</h1>
      <br />
      <button onClick={() => handleAuth()}>Log In</button>
      <button onClick={() => handleAuth()}>Log Out</button>
    </div>
  );
}
