import "@/src/styles/globals.css";
import Logo from "@/src/components/Logo";
import Navigation from "@/src/components/Navigation";
import { WEBSITE_NAME } from "@/config";

export const metadata = {
  title: {
    template: `%s / ${WEBSITE_NAME}`,
    default: WEBSITE_NAME,
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
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
