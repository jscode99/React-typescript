import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function TypeAssertion() {
  const [user, setUser] = useState<User>({} as User);

  const handleAuth = () => {
    setUser({ name: "Jishnu", email: "jishnusatheesh27@gmail.com" });
  };

  return (
    <div>
      <button onClick={() => handleAuth()}>Log In</button>
      <h1>User email is {user.email}</h1>
      <h1>User name is {user.name}</h1>
    </div>
  );
}
