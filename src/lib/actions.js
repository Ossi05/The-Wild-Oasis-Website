"use server";

import { ROUTES } from "@/config";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: ROUTES.accountRoutes.root });
}
export async function signOutAction() {
  await signOut({ redirectTo: ROUTES.home });
}
