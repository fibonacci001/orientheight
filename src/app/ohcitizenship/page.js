import Citizenshipmain from "@/components/layout/main/citizenship";
import ProjectsMain from "@/components/layout/main/ProjectsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { mainNavMetadata } from '@/libs/metadata'

export const metadata = mainNavMetadata.citizenship
console.log(metadata)
export default function Ohcitizenship() {
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
    <Citizenshipmain />
  );
}
