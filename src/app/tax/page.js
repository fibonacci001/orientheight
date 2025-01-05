import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Taxcom from "@/components/layout/main/Taxcomponentmain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

import { mainNavMetadata } from '@/libs/metadata'

export const metadata = mainNavMetadata.tax

export default  function Tax() {
  
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      
      <Taxcom />
    </PageWrapper>
  );
}

