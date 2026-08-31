"use client";

import { AtlasProvider } from "@/context/AtlasContext";
import Nav from "./Nav";
import Hero from "./Hero";
import GoalPicker from "./GoalPicker";
import RoadmapJourney from "./RoadmapJourney";
import StartHere from "./StartHere";
import MyPicks from "./MyPicks";
import Stats from "./Stats";
import CategoryGrid from "./CategoryGrid";
import FullIndex from "./FullIndex";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";
import SmoothScroll from "./SmoothScroll";

export default function AtlasApp() {
  return (
    <AtlasProvider>
      <SmoothScroll />
      <CommandPalette />
      <Nav />
      <Hero />
      <GoalPicker />
      <RoadmapJourney />
      <StartHere />
      <MyPicks />
      <Stats />
      <CategoryGrid />
      <FullIndex />
      <Footer />
    </AtlasProvider>
  );
}
