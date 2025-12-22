import Cabin from "@/src/components/Cabin";
import Reservation from "@/src/components/Reservation";
import Spinner from "@/src/components/Spinner";
import { getCabin, getCabins } from "@/src/lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

// Generate static params for all cabins
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map(cabin => ({
    cabinId: cabin.id.toString(),
  }));
  return ids;
}

export default async function CabinPage({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
