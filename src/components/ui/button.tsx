export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
