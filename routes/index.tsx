import { Head } from "$fresh/runtime.ts";
import Header from "../components/layout/Header.tsx";
import GridLink from "../components/GridLink.tsx";
import Footer from "../components/layout/Footer.tsx";
import Heading from "../components/Heading.tsx";

const linkedFunctions = [
  {
    link: "/edit",
    title: "Edit",
  },
  {
    link: "/compose",
    title: "Compose",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Fretta</title>
      </Head>
      <Header />
      <main>
        <Heading level={1} size="3" text="Fretta"></Heading>
        <section
          id="function-grid"
          className="mx-4 grid grid-cols-2 gap-6 sm:md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 items-center justify-center"
        >
          {linkedFunctions.map((f) => <GridLink {...f}></GridLink>)}
        </section>
      </main>
      <Footer />
    </>
  );
}
