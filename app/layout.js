import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Head } from 'nextra/components'
import './globals.css'
import Logo from '@/Logo'

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  
  // Note: In the App Router, the Root Layout wraps everything.
  // To hide the Navbar on the home page specifically, 
  // Route Groups (Method 1 below) are the standard Next.js way.
  
  return (
    <html lang="en" suppressHydrationWarning>
      <Head
        color={{
          hue: 212,
          saturation: 100,
          lightness: { dark: 80, light: 45 }
        }}
        backgroundColor={{
          dark: "#000000",
          light: "rgb(250,250,250)"
        }}
      />
      <meta name="google-site-verification" content="n_YUlcU179LigY3gtT1Xc3XJqd9ggJiHuiQsHi4H9JY" />
      <body suppressHydrationWarning>
        <Layout
          pageMap={pageMap}
          navbar={
            <Navbar
              logo={<Logo/>}
              projectLink="https://github.com/PANDURANGZURE/zure-ui"
            />
          }
          sidebar={{ autoCollapse: false }}
          // This prop allows you to set the layout to 'raw' 
          // globally or manage it via _meta.js
          
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}