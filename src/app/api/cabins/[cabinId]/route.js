import { getBookedDatesByCabinId, getCabin } from "@/src/lib/data-service";

export async function GET(req, { params }) {
  const { cabinId } = await params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Cabin not found." }, { status: 404 });
  }
}
