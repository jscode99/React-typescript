type StatusProps = {
  // Union type
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
  const { status } = props;
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return <div>Status is - {message}</div>;
}
