type GreetProps = {
  name: string;
  //* Optional props
  messageCount?: number;
  isLoggedIn?: boolean;
};

export default function Greet(props: GreetProps): JSX.Element {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name} ! You have {messageCount} unread messages
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
}
