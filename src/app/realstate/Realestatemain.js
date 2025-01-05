import HeroInner from "@/components/sections/hero-banners/HeroInner";

import Realestateprimary from "./Realestateprimary"
import React from "react";

const Realestatemain = ({ shop }) => {
  return (
    <main>
      <HeroInner title={"Realestate"} currentItem={"Property Listings"} />
      <Realestateprimary listIndex={shop} />
     
    </main>
  );
};

export default Realestatemain;
