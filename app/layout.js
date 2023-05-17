import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Blog Site",
  description: "full Stack blog site build using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
