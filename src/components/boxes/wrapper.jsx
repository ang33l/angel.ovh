export default function Wrapper({
  bg = false,
  children,
  id,
  className = "",
  style = {},
}) {
  return (
    <div
      id={id}
      className={`w-full ${bg ? "bg-text text-background" : ""} ${className}`}
      style={style}
    >
      <div className={"m-auto max-w-[1400px]"}>{children}</div>
    </div>
  );
}
