import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <button className="text-5xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-full">
        Hello SVGies!
      </button>
    </main>
  );
}
