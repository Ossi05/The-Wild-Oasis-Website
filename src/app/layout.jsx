import "@/src/styles/globals.css";
import { Josefin_Sans } from "next/font/google";

import Logo from "@/src/components/Logo";
import Navigation from "@/src/components/Navigation";
import { WEBSITE_NAME } from "@/config";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin);

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
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
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
