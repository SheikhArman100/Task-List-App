import AddTask from "@/components/AddTask";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PagesLayout({ children }) {
  return (
    <section className="h-screen w-full flex flex-col">
      <Navbar />
      <AddTask />
      <div className="flex-[1_1_100%] flex">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
