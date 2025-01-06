import HeroInner from "@/components/sections/hero-banners/HeroInner";
import RealEstatePrimary from "@/components/layout/main/Realestateprimary";

import React from "react";

const Realestatemain = () => {
  return (
    <main>
      <HeroInner title={"Realestate"} currentItem={"Property Listings"} />
      
      <RealEstatePrimary/>
     
    </main>
  );
};

export default Realestatemain;
