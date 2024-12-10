import ComparisonTable from "@/components/comparison/comparison";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 3 | Bastun- Business Consulting Next Js Template",
  description: "Home 3 | Bastun- Business Consulting Next Js Template",
};
export default function ResidencyComparison() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      {/* <ThemeController /> */}
      
      <ComparisonTable />
    </PageWrapper>
  );
}
