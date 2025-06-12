import Footer from "../../components/footer";
import Header from "../../components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center" >
      <div className="w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
