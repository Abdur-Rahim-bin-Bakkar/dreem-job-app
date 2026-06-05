// import Sidebar from "@/components/Sidebar";

import Sidebar from "@/component/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#07090D] min-h-screen ">
      <Sidebar />

      <main className="flex-1 p-5 text-white  mt-15">
        {children}
      </main>
    </div>
  );
}