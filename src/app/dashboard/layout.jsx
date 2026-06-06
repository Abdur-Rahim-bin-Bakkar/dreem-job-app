// import Sidebar from "@/components/Sidebar";

import Sidebar from "@/component/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#07090D] min-h-screen mt-15 ">
      <Sidebar className='' />

      <main className="flex-1 p-5 text-white  ">
        {children}
      </main>
    </div>
  );
}