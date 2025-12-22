import { getCabins } from "../lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();

  // This could also be filtered in Supabase
  let displayedCabins;
  switch (filter) {
    case "small": // <= 3 guests
      displayedCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
      break;
    case "medium": // 4-7 guests
      displayedCabins = cabins.filter(
        cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      );
      break;
    case "large": // 8+ guests
      displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);
      break;
    case "all":
    default:
      displayedCabins = cabins;
  }

  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map(cabin => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
