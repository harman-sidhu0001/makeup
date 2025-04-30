import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses = "rounded-full font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-white hover:bg-gray-100 text-primary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? disabledClasses : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={combinedClasses} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
