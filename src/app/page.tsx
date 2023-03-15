"use client";

import { useIsMounted } from "./hooks/useIsMounted";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mounted = useIsMounted();
  return (
    <main className="w-screen h-screen flex flex-col justify-center">
      <div className="w-full flex justify-end">
        {mounted ? (
          <ConnectButton showBalance={false} accountStatus="avatar" />
        ) : null}
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <a className="text-5xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-full">
          Hello SVGies!
        </a>
      </div>
    </main>
  );
}
