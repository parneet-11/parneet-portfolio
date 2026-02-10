export const Badge = ({ children, className = "", variant = "default" }: any) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${className}`}
    >
      {children}
    </span>
  );
};
