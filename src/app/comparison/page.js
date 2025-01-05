import ComparisonTable from "@/components/comparison/comparison";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

import { mainNavMetadata } from '@/libs/metadata'

export const metadata = mainNavMetadata.comparison
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
