import { Link } from "react-scroll/modules";

export default function Button({
  variant = "primary",
  children,
  type = "button",
  to = "#",
}) {
  const variants = {
    primary: "bg-primary text-text hover:bg-secondary transition-colors",
    secondary: "bg-secondary text-text hover:bg-primary transition-colors",
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
         hover:scale-105  `}
      >
        {children}
      </button>
    );
  }
}