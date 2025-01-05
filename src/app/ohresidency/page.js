
import Residencymain from "@/components/layout/main/residency";
import ProjectsMain from "@/components/layout/main/ProjectsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

import { mainNavMetadata} from '@/libs/metadata'

export const metadata = mainNavMetadata.residency
export default function Ohresidency() {
  return (
    // <PageWrapper
    //   headerStyle={3}
    //   footerStyle={3}
    //   headerBg={"black"}
    //   footerBg={"black"}
    // >
    //   <ThemeController />
    //   {/* <ProjectsMain /> */}
      
    // </PageWrapper>
    
    <Residencymain />
  );
}
