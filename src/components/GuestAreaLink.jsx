import { ROUTES } from "@/config";
import Link from "next/link";
import Image from "next/image";

export default async function GuestAreaLink({ imageSrc, altText }) {
  return (
    <Link
      href={ROUTES.accountRoutes.root}
      className="hover:text-accent-400 transition-colors flex items-center gap-4"
    >
      {imageSrc && (
        <div className="size-8 relative">
          <Image
            fill
            className="rounded-full"
            src={imageSrc}
            alt={altText}
            referrerPolicy="no-referrer"
            sizes="32px"
          />
        </div>
      )}
      <span>Guest area</span>
    </Link>
  );
}
