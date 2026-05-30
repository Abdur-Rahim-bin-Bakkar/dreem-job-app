import Banner from "@/component/Banner";
import FeaturedJobs from "@/component/FeaturedJobs";
import Features from "@/component/Features";
// import FeaturedJobs from "@/components/FeaturedJobs";
// import Features from "@/component/Features";
import NicerSection from "@/component/NicerSection";
import PricingSection from "@/component/PricingSection";
import Role from "@/component/Role";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner />
      <NicerSection />
      {/* <FeaturedJobs/> */}
      {/* <Features/> */}
      <FeaturedJobs/>
      <Features/>
      <PricingSection/>
      <Role/>
    </div>
  );
}
