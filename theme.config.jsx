import nextra from 'nextra'

const withNextra = nextra({
  // Only Markdown-related power-user settings go here now
  defaultShowCopyCode: true,
})

export default withNextra({
  // Standard Next.js options
  reactStrictMode: true,
})