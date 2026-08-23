"use client";

import { AtlasProvider } from "@/context/AtlasContext";
import Nav from "./Nav";
import Hero from "./Hero";
import GoalPicker from "./GoalPicker";
import RoadmapJourney from "./RoadmapJourney";
import StartHere from "./StartHere";
import Stats from "./Stats";
import HowItsIndexed from "./HowItsIndexed";
import Anatomy from "./Anatomy";
import CategoryGrid from "./CategoryGrid";
import FullIndex from "./FullIndex";
import Footer from "./Footer";
import BootSequence from "./BootSequence";
import CommandPalette from "./CommandPalette";
import SmoothScroll from "./SmoothScroll";
import NeuralBackground from "./NeuralBackground";

export default function AtlasApp() {
  return (
    <AtlasProvider>
      <NeuralBackground />
      <div className="app-content">
        <SmoothScroll />
        <BootSequence />
        <CommandPalette />
        <Nav />
        <Hero />
        <GoalPicker />
        <RoadmapJourney />
        <StartHere />
        <Stats />
        <HowItsIndexed />
        <Anatomy />
        <CategoryGrid />
        <FullIndex />
        <Footer />
      </div>
    </AtlasProvider>
  );
}
