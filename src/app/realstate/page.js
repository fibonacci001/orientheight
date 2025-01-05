
import Realestatelisting from "./Realestatelist";
import { mainNavMetadata } from '@/libs/metadata'
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = mainNavMetadata.realEstate


export default function Page() {
  return(
<PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <Realestatelisting />
    </PageWrapper>
    
  ) 
};