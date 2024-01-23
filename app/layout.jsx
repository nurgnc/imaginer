import "@/styles/reset.css"
import "@/styles/variables.css"
import "@/styles/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">{children}
        <div className="overlay" />
      </body>
    </html>
  );
}
