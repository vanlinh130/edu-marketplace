import Footer from "../../components/footer";
import Header from "../../components/header";
import CartToggler from "./components/CartToggler";
import FloatContact from "./components/FloatContact";

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
        <CartToggler/>
        <FloatContact/>
      </div>
    </div>
  );
}
