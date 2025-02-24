import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 pt-14">
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <Image
              src="/dineIn.png"
              alt="Para comer aqui"
              width={78}
              height={80}
            />
            <Button variant="secondary" className="rounded-full">
              Para comer aqui
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-8 py-8">
            <Image
              src="/delivery.png"
              alt="Para levar"
              width={78}
              height={80}
            />
            <Button variant="secondary" className="rounded-full">
              Para levar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RestaurantPage;
