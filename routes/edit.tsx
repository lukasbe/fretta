import { Head } from "$fresh/runtime.ts";
import Heading from "../components/Heading.tsx";
import Footer from "../components/layout/Footer.tsx";
import Header from "../components/layout/Header.tsx";

export default () => {
  return (
    <>
      <Head>
        <title>Fretta - Edit</title>
      </Head>
      <Header></Header>
      <main>
        <Heading level={1} size="2" text="Fretta Edit"></Heading>
      </main>
      <Footer></Footer>
    </>
  );
};
