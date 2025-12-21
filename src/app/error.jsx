"use client";

import { ROUTES } from "@/config";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Try again
      </button>
      <Link href={ROUTES.home} className="text-primary-700">
        Back to the home page{" "}
        <ArrowRightCircleIcon className="inline h-5 w-5 ml-1" />
      </Link>
    </main>
  );
}
