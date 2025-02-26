import { Clock } from "lucide-react";

import RestaurantIcon from "@/components/restaurant-icon";
import { db } from "@/lib/prisma";

async function HomePage() {
  const restaurants = await db.restaurant.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-[#f2f2f7]">
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 flex items-baseline gap-1">
            FoodTotem<span className="text-3xl text-green-600">Hub</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <Clock size={16} />
            <span>Aberto agora</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantIcon key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
