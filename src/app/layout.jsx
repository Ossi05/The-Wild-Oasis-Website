import Logo from "@/src/components/Logo";
import Navigation from "@/src/components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        {children}
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
