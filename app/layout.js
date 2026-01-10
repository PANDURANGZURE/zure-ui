import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children }) {
  // If your files are in /app/Doc, use getPageMap('/Doc') 
  // or leave it empty to get everything.
  const pageMap = await getPageMap() 
  
    
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          pageMap={pageMap}
          navbar={<Navbar 
            logo={<b>Zure UI</b>}
            projectLink="https://github.com/PANDURANGZURE/" />}
          footer={<Footer>Built with Nextra</Footer>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}