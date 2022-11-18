import Head from "next/head";
import Headers from "../components/Headers";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Headers/>
      <main className="max-w-screen-2xl mx-auto">
      <Banner/>
      </main>

    </div>
  );
}
