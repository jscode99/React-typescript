import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function FutureValue() {
  const [user, setUser] = useState<User | null>(null);

  const handleAuth = (type: string) => {
    setUser(
      type === "In"
        ? { name: "Jishnu", email: "jishnusatheesh27@gmail.com" }
        : null,
    );
  };

  return (
    <div>
      <button onClick={() => handleAuth("In")}>Log In</button>
      <button onClick={() => handleAuth("Out")}>Log Out</button>
      <h1>User email is {user?.email}</h1>
      <h1>User name is {user?.name}</h1>
    </div>
  );
}
