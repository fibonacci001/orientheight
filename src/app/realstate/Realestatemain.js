import HeroInner from "@/components/sections/hero-banners/HeroInner";

import Realestateprimary from "./Realestateprimary"
import React from "react";

const Realestatemain = () => {
  return (
    <main>
      <HeroInner title={"Realestate"} currentItem={"Property Listings"} />
      <Realestateprimary  />
     
    </main>
  );
};

export default Realestatemain;
