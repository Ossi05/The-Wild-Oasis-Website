"use server";

import { ROUTES } from "@/config";
import { auth, signIn, signOut } from "./auth";
import { isValidNationalID } from "../utils";
import { deleteBooking, getBookings, updateGuest } from "./data-service";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  await signIn("google", { redirectTo: ROUTES.accountRoutes.root });
}
export async function signOutAction() {
  await signOut({ redirectTo: ROUTES.home });
}
export async function updateGuestAction(formData) {
  const session = await requireAuth();

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!isValidNationalID(nationalID))
    throw new Error("Please provide a valid national ID");

  const updatedData = { nationalID, nationality, countryFlag };
  await updateGuest(session.user.guestId, updatedData);

  revalidatePath(ROUTES.accountRoutes.profile);
}
export async function deleteReservationAction(bookingId) {
  const session = await requireAuth();

  const guestBookings = await getBookings(session.user.guestId);
  const bookingIds = guestBookings.map(booking => booking.id);

  if (!bookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  await deleteBooking({ bookingId, guestId: session.user.guestId });
  revalidatePath(ROUTES.accountRoutes.reservations);
}

async function requireAuth() {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }
  return session;
}
