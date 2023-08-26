import { NavBar } from "../components/NavBar";

import { CeoSection, FeatureSection, HeaderSection } from "./CustomSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderSection />
      <FeatureSection />
      <CeoSection />
    </>
  );
}
