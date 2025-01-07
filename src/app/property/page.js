


import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

import Realestatelisting from "./Realestatelist";
import { mainNavMetadata } from '@/libs/metadata'
export const metadata = mainNavMetadata.realEstate


export default function Realestate() {
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