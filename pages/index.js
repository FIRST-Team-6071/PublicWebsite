import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="6071 - The Aluminators"
        description="FRC 6071. The Aluminators. Bay City Central High School's Robotics Team."
        canonical="https://frc6071.com/"
        openGraph={{
          url: "https://frc6071.com/",
        }}
      />
      <Head>
        <title>The Aluminators</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
