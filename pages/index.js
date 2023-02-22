import { NextSeo } from "next-seo";
import { Header, Footer } from "src/components/common";

export default function Home() {
  return (
    <>
      <NextSeo
        title="XXX"
        description="XXX"
        additionalLinkTags={[
          { rel: "icon", href: "/favicon.ico" },
          { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16" },
        ]}
      />
      <main>
        <Header />

        <h1 className="text-xl font-bold">XXX</h1>

        <Footer />
      </main>
    </>
  );
}
