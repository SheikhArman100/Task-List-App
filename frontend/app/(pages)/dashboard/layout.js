import CookieChecker from "@/components/CookieChecker";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PagesLayout({ children }) {
  return (
    <CookieChecker>
      <section className="min-h-screen  w-full flex flex-col">
        <Navbar />
        <div className="flex-[1_1_100%] flex justify-between ">
          <Sidebar />
          {children}
        </div>
      </section>
    </CookieChecker>
  );
}
