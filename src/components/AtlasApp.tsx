"use client";

import { AtlasProvider } from "@/context/AtlasContext";
import Nav from "./Nav";
import Hero from "./Hero";
import Stats from "./Stats";
import HowItsIndexed from "./HowItsIndexed";
import Anatomy from "./Anatomy";
import CategoryGrid from "./CategoryGrid";
import FullIndex from "./FullIndex";
import Footer from "./Footer";

export default function AtlasApp() {
  return (
    <AtlasProvider>
      <Nav />
      <Hero />
      <Stats />
      <HowItsIndexed />
      <Anatomy />
      <CategoryGrid />
      <FullIndex />
      <Footer />
    </AtlasProvider>
  );
}
