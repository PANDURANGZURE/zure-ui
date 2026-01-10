import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          // If pageMap is missing, we pass an empty array
          // Nextra 4 theme internally validates this list
          pageMap={pageMap || []} 
          navbar={<Navbar logo={<b>My Project</b>} />}
          footer={<Footer>Built with Nextra</Footer>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}