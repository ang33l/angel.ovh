import { Link } from "react-scroll/modules";
import PropTypes from "prop-types";

const Button = ({
  variant = "primary",
  children,
  type = "button",
  to = "#",
  className = "",
  onClick = () => {},
}) => {
  const variants = {
    primary:
      "bg-primary text-text hover:bg-secondary transition-colors text-center",
    secondary:
      "bg-secondary text-text hover:bg-primary transition-colors  text-center",
  };
  if (type === "link") {
    return (
      <Link
        to={to}
        smooth={true}
        className={`${variants[variant]} px-5 py-3 rounded-lg text-2xl
         hover:text-text  
         transition-all duration-200 
         hover:transition-all hover:duration-200
         hover:scale-105  `}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${variants[variant]} px-5 py-3 rounded-lg text-2xl
      transition-all duration-200 
         hover:transition-all hover:duration-200
         hover:scale-105 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
