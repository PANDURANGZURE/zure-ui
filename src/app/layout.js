// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title className="bg-black">Zure UI Docs</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
