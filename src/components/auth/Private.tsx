import LogIn from "./LogIn";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  // Component as props
  profile: React.ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  profile: Profile,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Profile name="test" />;
  } else {
    return <LogIn />;
  }
}
