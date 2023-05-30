type StyleProps = {
  children: string;
  style: React.CSSProperties;
};

export default function Container(props: StyleProps) {
  return <div style={props.style}>{props.children}</div>;
}
