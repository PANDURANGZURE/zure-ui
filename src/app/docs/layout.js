import "../globals.css"

export default function DocsLayout({ children }) {
  return (
    <div>
      <header className="text-center">Docs Header</header>
      <main>{children}</main>
    </div>
  );
}
