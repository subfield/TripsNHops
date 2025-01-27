import React from "react";
import clsx from "clsx";
import * as T from "@/types";
import { Loader2 } from "lucide-react";

const Button: React.FC<T.ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = !!0,
  loading = !!0,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Variants
        {
          "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500":
            variant === "primary",
          "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500":
            variant === "secondary",
          "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500":
            variant === "danger",
          "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400":
            variant === "outline",
        },
        // Sizes
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-md": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        // Disabled
        {
          "cursor-not-allowed opacity-50": disabled || loading,
        },
        className // Custom styles
      )}
    >
      {children}
      {loading && <Loader2 className="h-3 w-3 animate-spin" />}{" "}
      {/* Optional spinner for loading state */}
    </button>
  );
};

export default Button;
