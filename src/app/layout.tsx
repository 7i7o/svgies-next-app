"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

// export const metadata = {
//   title: "SVGies",
//   description: "Unique Visual Wallet Identifier",
// };

// Rainbowkit config
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet],
  [
    // jsonRpcProvider({ rpc: () => { return { http: process.env.NEXT_PUBLIC_RPC_KEY || "" }; }, }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "SVGies App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SVGies</title>
        <meta name="description" content="Unique Visual Wallet Identifier" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <body>{children}</body>
        </RainbowKitProvider>
      </WagmiConfig>
    </html>
  );
}
