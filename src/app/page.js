'use client'

import Banner from "./components/Banner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Tours from "./components/Tours";
import TourCategories from "./components/TourCategory";
import BackPackingTour from "./components/BackPackingTour";
import PerfectEscape from "./components/PerfectEscape";
import Accordion from "./components/Accordion";
import Newsletter from "./components/Newsletter";

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);



  return (
    <main className="min-h-screen">
      <Banner />
      <Tours/>
      <TourCategories/>
      <BackPackingTour/>
      <PerfectEscape/>
      <Accordion/>
      <Newsletter/>
    </main>
  );
}
