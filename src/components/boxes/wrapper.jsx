import { forwardRef } from "react";
const Wrapper = forwardRef(function (props, ref) {
  const { bg = false, children, id, className = "", style = {} } = props;
  return (
    <div
      ref={ref}
      id={id}
      data-section={id}
      className={`w-full ${bg ? "bg-text text-background" : ""} ${className}`}
      style={style}
    >
      <div className={"m-auto max-w-[1400px]"}>{children}</div>
    </div>
  );
});

export default Wrapper;
