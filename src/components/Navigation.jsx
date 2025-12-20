import Link from "next/link";
import { ROUTES } from "@/config";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={ROUTES.home}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.cabins}>Cabins</Link>
        </li>
        <li>
          <Link href={ROUTES.about}>About</Link>
        </li>
        <li>
          <Link href={ROUTES.account}>Your account</Link>
        </li>
      </ul>
    </nav>
  );
}
