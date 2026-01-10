import { Layout, Navbar, Footer, ThemeSwitch} from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Head, Search } from 'nextra/components'


export default async function RootLayout({ children }) {
  // If your files are in /app/Doc, use getPageMap('/Doc') 
  // or leave it empty to get everything.
  const pageMap = await getPageMap() 
  
    
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
    light: "rgb(250,250,250)"}}
      />
      <body>
        <Layout
          pageMap={pageMap}
          navbar={<Navbar
            logo={<b>Zure UI</b>}
            projectLink="https://github.com/PANDURANGZURE/">
            <ThemeSwitch />
          </Navbar>
             }
          
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}