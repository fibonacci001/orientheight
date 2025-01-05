import AboutMain from "@/components/layout/main/AboutMain";
import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { mainNavMetadata } from '@/libs/metadata'

export const metadata = mainNavMetadata.about
export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <AboutMain />
    </PageWrapper>
  );
}
