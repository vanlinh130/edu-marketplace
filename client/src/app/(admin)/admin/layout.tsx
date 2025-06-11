import Dashboard from "../components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full pb-[80px]">
        <Dashboard />
        {children}
      </div>
    </div>
  );
}
