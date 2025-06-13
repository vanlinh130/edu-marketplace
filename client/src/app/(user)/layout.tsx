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
        <div className="pt-[76px]">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
