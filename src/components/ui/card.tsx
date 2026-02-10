export const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-xl border p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }: any) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: any) => (
  <div className="mb-2">{children}</div>
);

export const CardTitle = ({ children, className = "" }: any) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);
