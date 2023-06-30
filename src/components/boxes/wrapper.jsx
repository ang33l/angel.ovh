import PropTypes from "prop-types";

const Wrapper = (props) => {
  const { bg = false, children, id, className = "", style = {} } = props;
  return (
    <div
      id={id}
      data-section
      className={`w-full ${bg ? "bg-text text-background" : ""} ${className}`}
      style={style}
    >
      <div className={"m-auto max-w-[1400px]"}>{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  bg: PropTypes.bool,
  children: PropTypes.any,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Wrapper;
