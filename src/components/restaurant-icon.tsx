import { Restaurant } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface RestaurantIconProps {
  restaurant: Restaurant;
}

const RestaurantIcon = ({ restaurant }: RestaurantIconProps) => {
  return (
    <Link
      href={`/${restaurant.slug}`}
      className="flex flex-col items-center group relative"
    >
      <div className="relative w-32 h-32 mb-3 rounded-[22%] overflow-hidden shadow-lg transition-all duration-200 transform group-hover:scale-105 bg-white group-hover:shadow-xl">
        {/* Overlay de brilho */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-10" />
        
        {/* Imagem do restaurante */}
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          fill
          className="object-cover p-4"
        />
        
        {/* Reflexo sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
      
      <span className="text-sm font-medium text-center text-gray-700 transition-colors group-hover:text-gray-900">
        {restaurant.name}
      </span>
      
      {/* Indicador de notificação (opcional) */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full hidden group-hover:block transition-all duration-200" />
    </Link>
  );
};

export default RestaurantIcon; 