import "@/src/styles/globals.css";
import Logo from "@/src/components/Logo";
import Navigation from "@/src/components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
