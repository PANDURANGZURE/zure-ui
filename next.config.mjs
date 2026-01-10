// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


import nextra from 'nextra'

const withNextra = nextra({
  // Only markdown-specific options go here now
  defaultShowCopyCode: true
})

export default withNextra({
  // Standard Next.js options
  reactStrictMode: true,
})