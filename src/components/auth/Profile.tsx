export type ProfileProps = {
  name: string;
};
export default function Profile({ name }: ProfileProps) {
  return <div>Profile member is {name}</div>;
}
