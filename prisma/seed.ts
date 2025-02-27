/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    // Burger King
    const burgerKing = await tx.restaurant.create({
      data: {
        name: "Burger King",
        slug: "burger-king",
        description: "O Rei do Hambúrguer. Have it your way!",
        avatarImageUrl: "https://logopng.com.br/logos/burger-king-43.png",
        coverImageUrl: "https://www.burgerking.com.br/wp-content/uploads/2019/04/banner-home-1920x600.jpg",
      },
    });

    const bkCombosCategory = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: burgerKing.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Combo Whopper",
          description: "O clássico! Hambúrguer grelhado no fogo com queijo, tomate, alface, maionese, cebola e picles no pão com gergelim. Acompanha batata média e bebida.",
          price: 38.9,
          imageUrl: "https://www.burgerking.com.br/wp-content/uploads/2019/04/whopper-combo.png",
          menuCategoryId: bkCombosCategory.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer grelhado no fogo",
            "Queijo cheddar",
            "Tomate",
            "Alface",
            "Maionese",
            "Cebola",
            "Picles"
          ],
        },
        {
          name: "Combo Stacker Triplo",
          description: "Três hambúrgueres grelhados, queijo derretido, bacon crocante e molho stacker. Acompanha batata média e bebida.",
          price: 46.9,
          imageUrl: "https://www.burgerking.com.br/wp-content/uploads/2019/04/stacker-triplo-combo.png",
          menuCategoryId: bkCombosCategory.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão com gergelim",
            "3 Hambúrgueres grelhados",
            "Queijo cheddar",
            "Bacon",
            "Molho stacker"
          ],
        },
      ],
    });

    const bkLanchesCategory = await tx.menuCategory.create({
      data: {
        name: "Lanches",
        restaurantId: burgerKing.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Chicken Crisp",
          description: "Frango empanado crocante com maionese e alface no pão com gergelim.",
          price: 24.9,
          imageUrl: "https://www.burgerking.com.br/wp-content/uploads/2019/04/chicken-crisp.png",
          menuCategoryId: bkLanchesCategory.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão com gergelim",
            "Frango empanado",
            "Maionese",
            "Alface"
          ],
        },
      ],
    });

    // Subway
    const subway = await tx.restaurant.create({
      data: {
        name: "Subway",
        slug: "subway",
        description: "Sabor fresco do seu jeito!",
        avatarImageUrl: "https://logopng.com.br/logos/subway-95.png",
        coverImageUrl: "https://www.subway.com/pt-BR/-/media/Brazil/Homepage/hero-banner.jpg",
      },
    });

    const subsCombosCategory = await tx.menuCategory.create({
      data: {
        name: "Subs 30cm",
        restaurantId: subway.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Frango Defumado com Cream Cheese",
          description: "Sub de 30cm com frango defumado, cream cheese, vegetais à sua escolha no pão de sua preferência.",
          price: 32.9,
          imageUrl: "https://www.subway.com/pt-BR/-/media/Brazil/Products/Subs/sub-frango-defumado.jpg",
          menuCategoryId: subsCombosCategory.id,
          restaurantId: subway.id,
          ingredients: [
            "Pão (escolha)",
            "Frango defumado",
            "Cream cheese",
            "Alface",
            "Tomate",
            "Cebola",
            "Pepino",
            "Pimentão"
          ],
        },
      ],
    });

    // KFC
    const kfc = await tx.restaurant.create({
      data: {
        name: "KFC",
        slug: "kfc",
        description: "Kentucky Fried Chicken - Finger Lickin' Good!",
        avatarImageUrl: "https://logopng.com.br/logos/kfc-95.png",
        coverImageUrl: "https://www.kfc.com.br/wp-content/uploads/2021/03/banner-home.jpg",
      },
    });

    const kfcBaldesCategory = await tx.menuCategory.create({
      data: {
        name: "Baldes",
        restaurantId: kfc.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Balde Kentucky - 12 Pedaços",
          description: "12 pedaços do nosso frango crocante original com a receita secreta de 11 ervas e especiarias.",
          price: 69.9,
          imageUrl: "https://www.kfc.com.br/wp-content/uploads/2021/03/balde-12-pecas.png",
          menuCategoryId: kfcBaldesCategory.id,
          restaurantId: kfc.id,
          ingredients: [
            "12 pedaços de frango",
            "Tempero secreto de 11 ervas",
            "Empanamento crocante"
          ],
        },
        {
          name: "Balde Kentucky Fire - 8 Pedaços",
          description: "8 pedaços do nosso frango crocante apimentado com molho especial Kentucky Fire.",
          price: 54.9,
          imageUrl: "https://www.kfc.com.br/wp-content/uploads/2021/03/balde-fire.png",
          menuCategoryId: kfcBaldesCategory.id,
          restaurantId: kfc.id,
          ingredients: [
            "8 pedaços de frango",
            "Tempero apimentado",
            "Molho Kentucky Fire",
            "Empanamento crocante"
          ],
        },
      ],
    });

    // Gendai
    const gendai = await tx.restaurant.create({
      data: {
        name: "Gendai",
        slug: "gendai",
        description: "O melhor da culinária japonesa!",
        avatarImageUrl: "https://logopng.com.br/logos/gendai-95.png",
        coverImageUrl: "https://www.gendai.com.br/wp-content/uploads/2021/03/banner-home.jpg",
      },
    });

    const sushiCategory = await tx.menuCategory.create({
      data: {
        name: "Sushis",
        restaurantId: gendai.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Combinado Especial - 40 peças",
          description: "Mix de sushis variados incluindo sashimis de salmão, niguiris, hossomakis e uramakis.",
          price: 89.9,
          imageUrl: "https://www.gendai.com.br/wp-content/uploads/2021/03/combinado-40.png",
          menuCategoryId: sushiCategory.id,
          restaurantId: gendai.id,
          ingredients: [
            "10 sashimis de salmão",
            "10 niguiris diversos",
            "10 hossomakis diversos",
            "10 uramakis diversos"
          ],
        },
        {
          name: "Hot Roll - 10 unidades",
          description: "Roll empanado e frito recheado com salmão e cream cheese.",
          price: 32.9,
          imageUrl: "https://www.gendai.com.br/wp-content/uploads/2021/03/hot-roll.png",
          menuCategoryId: sushiCategory.id,
          restaurantId: gendai.id,
          ingredients: [
            "Arroz japonês",
            "Alga nori",
            "Salmão",
            "Cream cheese",
            "Empanamento crocante"
          ],
        },
      ],
    });

    const temakiCategory = await tx.menuCategory.create({
      data: {
        name: "Temakis",
        restaurantId: gendai.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Temaki Salmão",
          description: "Temaki de salmão fresco com cream cheese e cebolinha.",
          price: 26.9,
          imageUrl: "https://www.gendai.com.br/wp-content/uploads/2021/03/temaki-salmao.png",
          menuCategoryId: temakiCategory.id,
          restaurantId: gendai.id,
          ingredients: [
            "Arroz japonês",
            "Alga nori",
            "Salmão fresco",
            "Cream cheese",
            "Cebolinha"
          ],
        },
      ],
    });

    // Spoleto
    const spoleto = await tx.restaurant.create({
      data: {
        name: "Spoleto",
        slug: "spoleto",
        description: "Massas e pratos italianos do seu jeito!",
        avatarImageUrl: "https://logopng.com.br/logos/spoleto-95.png",
        coverImageUrl: "https://www.spoleto.com.br/wp-content/uploads/2021/03/banner-home.jpg",
      },
    });

    const massasCategory = await tx.menuCategory.create({
      data: {
        name: "Massas",
        restaurantId: spoleto.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Spaghetti à Bolonhesa",
          description: "Spaghetti al dente com molho de carne moída, tomate e ervas.",
          price: 35.9,
          imageUrl: "https://www.spoleto.com.br/wp-content/uploads/2021/03/spaghetti-bolonhesa.png",
          menuCategoryId: massasCategory.id,
          restaurantId: spoleto.id,
          ingredients: [
            "Spaghetti",
            "Molho de tomate",
            "Carne moída",
            "Cebola",
            "Alho",
            "Ervas frescas"
          ],
        },
        {
          name: "Fettuccine Alfredo",
          description: "Fettuccine na cremosa receita original com molho alfredo e parmesão.",
          price: 38.9,
          imageUrl: "https://www.spoleto.com.br/wp-content/uploads/2021/03/fettuccine-alfredo.png",
          menuCategoryId: massasCategory.id,
          restaurantId: spoleto.id,
          ingredients: [
            "Fettuccine",
            "Molho alfredo",
            "Queijo parmesão",
            "Manteiga",
            "Noz moscada"
          ],
        },
      ],
    });

    const saladasCategory = await tx.menuCategory.create({
      data: {
        name: "Saladas",
        restaurantId: spoleto.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Salada Caesar",
          description: "Mix de folhas, frango grelhado, croutons, parmesão e molho caesar.",
          price: 29.9,
          imageUrl: "https://www.spoleto.com.br/wp-content/uploads/2021/03/salada-caesar.png",
          menuCategoryId: saladasCategory.id,
          restaurantId: spoleto.id,
          ingredients: [
            "Alface romana",
            "Frango grelhado",
            "Croutons",
            "Queijo parmesão",
            "Molho caesar"
          ],
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
