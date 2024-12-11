import Home3Main from "@/components/layout/main/Home3Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "orientheight website",
  description: "citizenship, residency, tax",
};
export default function Home3() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
    >
      <ThemeController />
      <Home3Main />
    </PageWrapper>
  );
}
