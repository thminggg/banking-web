export default function CenterText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: { [key: string]: string | number };
}) {
  return (
    <p className={className} style={{ textAlign: "center", ...style }}>
      {text}
    </p>
  );
}
