// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zure UI Docs</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
