import PdfformMain from "./PdfformMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact | Bastun- Business Consulting Next Js Template",
  description: "Contact | Bastun- Business Consulting Next Js Template",
};
export default function Pdfform() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      
      <PdfformMain />
    </PageWrapper>
  );
}
