import Link from "next/link";
import { ROUTES } from "@/config";
import UserNavLink from "./UserNavLink";
import { Suspense } from "react";
import GuestAreaLink from "./GuestAreaLink";

export default async function Navigation() {
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
        <Suspense fallback={<GuestAreaLink />}>
          <UserNavLink />
        </Suspense>
      </ul>
    </nav>
  );
}
