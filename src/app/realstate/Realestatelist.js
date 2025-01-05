import ShopMain from "@/components/layout/main/ShopMain";
import Realestatemain from "./Realestatemain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Shop | Bastun- Business Consulting Next Js Template",
  description: "Shop | Bastun- Business Consulting Next Js Template",
};
export default function Realestatelisting() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <Realestatemain shop={1} />
      
    </PageWrapper>
  );
}
