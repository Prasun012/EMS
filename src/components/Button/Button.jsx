function Button({
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  children
}) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition duration-200";

  const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
};

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600"
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${
        disabled ? disabledStyle : ""
      }`}
    >
      {children}
    </button>
  );
}
export default Button;