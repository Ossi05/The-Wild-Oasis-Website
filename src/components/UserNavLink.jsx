import { ROUTES } from "@/config";
import { auth } from "../lib/auth";
import GuestAreaLink from "./GuestAreaLink";

export default async function UserNavLink() {
  const session = await auth();
  return (
    <li>
      {session?.user?.image ? (
        <GuestAreaLink
          imageSrc={session.user.image}
          altText={session.user.name}
        />
      ) : (
        <GuestAreaLink />
      )}
    </li>
  );
}
