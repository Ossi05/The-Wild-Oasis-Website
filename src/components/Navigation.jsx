import Link from "next/link";
import { ROUTES } from "@/config";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href={ROUTES.cabins}
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href={ROUTES.about}
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={ROUTES.accountRoutes.root}
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
