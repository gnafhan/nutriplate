import Head from "next/head";

import Image from "next/image";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { Timeline } from "../../../components/Timeline";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name="description" content="Nutriplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen">
        <Image src={"/img/Normal.png"} width={400} height={400} />
        <h1 className="my-5 text-5xl font-bold text-center text-primary">
          Resep Makanan
        </h1>
        <div className="flex justify-center w-full h-full">
          <div className="flex justify-center w-full max-w-screen-lg px-5 gap-y-8 ">
            <Timeline />
          </div>
        </div>
      </section>
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
