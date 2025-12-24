"use server";

import { ROUTES } from "@/config";
import { auth, signIn, signOut } from "./auth";
import { isValidNationalID } from "../utils";
import { updateGuest } from "./data-service";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: ROUTES.accountRoutes.root });
}
export async function signOutAction() {
  await signOut({ redirectTo: ROUTES.home });
}
export async function updateGuestAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!isValidNationalID(nationalID))
    throw new Error("Please provide a valid national ID");
  const updatedData = { nationalID, nationality, countryFlag };
  await updateGuest(session.user.guestId, updatedData);
  revalidatePath(ROUTES.accountRoutes.profile);
}
