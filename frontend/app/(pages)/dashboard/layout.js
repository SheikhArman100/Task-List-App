import AddTask from "@/components/AddTask";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PagesLayout({ children }) {
  return (
    <section className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-[1_1_100%] flex justify-between ">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
