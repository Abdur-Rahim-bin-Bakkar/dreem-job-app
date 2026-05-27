import Banner from "@/component/Banner";
import NicerSection from "@/component/NicerSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <NicerSection />
    </div>
  );
}
