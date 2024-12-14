import Primarypdfform from "./Primarypdfform";
import HeroInner from "@/components/sections/hero-banners/HeroInner";


const PdfformMain = () => {
  return (
    <main>
      <HeroInner title={"Contact us"} currentItem={"Contact us"} />
      <Primarypdfform />
      
    </main>
  );
};

export default PdfformMain;
