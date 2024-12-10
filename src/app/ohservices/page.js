
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import Ohcitizenship from "../ohcitizenship/page";

import { main } from "@popperjs/core";
import Ohresidency from "../ohresidency/page";
export const metadata = {
  title: "Projects | Bastun- Business Consulting Next Js Template",
  description: "Projects | Bastun- Business Consulting Next Js Template",
};

export default function Services() {
    console.log("componenet has loaded");

  return (
    // <PageWrapper
    //   headerStyle={3}
    //   footerStyle={3}
    //   headerBg={"black"}
    //   footerBg={"black"}
    // >
    //   
    //   <HeroInner title={"All Project"} currentItem={"All Project"} />
      
    // </PageWrapper>
    


<PageWrapper
headerStyle={3}
   footerStyle={3}
   headerBg={"black"}
  footerBg={"black"}
>


<main>
    <ThemeController />
 
<HeroInner title={"All Project"} currentItem={"All Project"} />
    <Ohcitizenship />
   <h1 className="black"> residency</h1>
   
   <Ohresidency />
    
     </main>
  </PageWrapper>  
    
    
  );
}
