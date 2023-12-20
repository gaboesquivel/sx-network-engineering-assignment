'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrumGoerli } from '@wagmi/chains'
// import { publicProvider } from 'wagmi/providers/public'

// const { chains, publicClient } = configureChains(
//   [arbitrumGoerli],
//   [publicProvider()]
// )

// const { connectors } = getDefaultWallets({
//   appName: 'Blind App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains
// })

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient
// })

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {/* <WagmiConfig config={wagmiConfig}> */}
      {/* <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider> */}
      {/* </WagmiConfig> */}
    </NextThemesProvider>
  )
}
