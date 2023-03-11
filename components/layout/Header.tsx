import { Head } from "$fresh/runtime.ts";

export default () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <header className="bg-green-500 h-16 flex justify-center">
        <div className="w-full h-full flex justify-between items-center">
          <a className="ml-2 h-14" href="/">
            <img
              id="logo"
              className="h-full w-full"
              src="/logo.svg"
              alt="Logo"
            />
          </a>
          <div id="buttons" className="mr-2 flex justify-center items-center">
            <button className="rounded-b bg-red-500 p-2 text-white">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
