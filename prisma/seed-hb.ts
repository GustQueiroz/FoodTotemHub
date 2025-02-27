import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx) => {
    // HB Stakehouse
    const hbStakehouse = await tx.restaurant.findUnique({
      where: {
        id: "37ab69bf-f6fe-4b95-9877-72af266f0afa",
      },
    });

    if (!hbStakehouse) {
      throw new Error("Restaurante HB Stakehouse não encontrado!");
    }

    // Categoria Entradas
    const entradasCategory = await tx.menuCategory.create({
      data: {
        name: "Entradas",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Pasteizinhos de carne 6 un",
          description: "Deliciosos pastéizinhos de carne 6 un",
          price: 39.0,
          imageUrl: "/images/produtos/pasteizinhos-carne.jpg",
          menuCategoryId: entradasCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Massa crocante",
            "Recheio de carne",
            "Temperos especiais",
          ],
        },
        {
          name: "Torresmo de rolo Crocante",
          description: "1 Porção de Torresmo aproximadamente 300 g",
          price: 49.0,
          imageUrl: "/images/produtos/torresmo-rolo.jpg",
          menuCategoryId: entradasCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Barriga de porco", "Temperos especiais", "Sal"],
        },
        {
          name: "Pasteizinhos de queijos 6 un",
          description: "6 un de deliciosos pastéizinhos de queijos",
          price: 39.0,
          imageUrl: "/images/produtos/pasteizinhos-queijo.jpg",
          menuCategoryId: entradasCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Massa crocante",
            "Mix de queijos",
            "Temperos especiais",
          ],
        },
      ],
    });

    // Categoria Porções
    const porcoesCategory = await tx.menuCategory.create({
      data: {
        name: "Porções",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Porção de Batatas Fritas",
          description: "Batatas fritas crocantes e douradas",
          price: 29.0,
          imageUrl: "/images/produtos/batatas-fritas.jpg",
          menuCategoryId: porcoesCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Batatas selecionadas", "Sal", "Temperos especiais"],
        },
        {
          name: "Porção de Mandioca Frita",
          description: "Mandioca frita crocante",
          price: 32.0,
          imageUrl: "/images/produtos/mandioca-frita.jpg",
          menuCategoryId: porcoesCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Mandioca selecionada", "Sal", "Temperos especiais"],
        },
      ],
    });

    // Categoria Burguers Artesanais
    const burguersCategory = await tx.menuCategory.create({
      data: {
        name: "Burguer's artesanais",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Combo HB Mediterrâneo",
          description:
            "Burger 180g pão brioche, queijo cheddar servido no prato com batata",
          price: 49.9,
          imageUrl: "/images/produtos/hb-mediterraneo.jpg",
          menuCategoryId: burguersCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Pão brioche",
            "Hambúrguer 180g",
            "Queijo cheddar",
            "Batatas fritas",
          ],
        },
        {
          name: "Combo HB Blue Cheese",
          description:
            "2 Burguers 120g pão Brioche, Bacon, Blend de Queijos Gorgonzola e Mussarela",
          price: 44.9,
          imageUrl: "/images/produtos/hb-blue-cheese.jpg",
          menuCategoryId: burguersCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Pão brioche",
            "2 Hambúrgueres 120g",
            "Bacon",
            "Queijo gorgonzola",
            "Queijo mussarela",
          ],
        },
        {
          name: "HB Sweet bite",
          description:
            "Pão brioche, Burguer 180g, Queijo american cheese, Alface e Molho agridoce",
          price: 29.9,
          imageUrl: "/images/produtos/hb-sweet-bite.jpg",
          menuCategoryId: burguersCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Pão brioche",
            "Hambúrguer 180g",
            "Queijo american cheese",
            "Alface",
            "Molho agridoce",
          ],
        },
        {
          name: "HB Burguer 200g com queijo mussarela Fior Di Latte e bacon",
          description: "Servido no prato com alface,tomate, batata frita",
          price: 42.9,
          imageUrl: "/images/produtos/hb-burguer-fior.jpg",
          menuCategoryId: burguersCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Hambúrguer 200g",
            "Queijo mussarela Fior Di Latte",
            "Bacon",
            "Alface",
            "Tomate",
            "Batata frita",
          ],
        },
      ],
    });

    // Categoria Flat Iron
    const flatIronCategory = await tx.menuCategory.create({
      data: {
        name: "Flat Iron",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Flat Iron angus & Sauce",
          description:
            "Serve 1 pessoa + Flat Iron 280g servido com Corn salada ou batata frita",
          price: 69.8,
          imageUrl: "/images/produtos/flat-iron-sauce.jpg",
          menuCategoryId: flatIronCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Flat Iron angus 280g",
            "Molho especial",
            "Corn salada ou batata frita",
          ],
        },
        {
          name: "Ancho Angus 280g grelhado",
          description: "Acompanha Purê de abóbora japonesa com mel",
          price: 69.2,
          imageUrl: "/images/produtos/ancho-angus.jpg",
          menuCategoryId: flatIronCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Ancho Angus 280g", "Purê de abóbora japonesa", "Mel"],
        },
        {
          name: "Flat Iron angus 280g grelhado",
          description: "Acompanha Purê de mandioquinha com arroz",
          price: 59.8,
          imageUrl: "/images/produtos/flat-iron-pure.jpg",
          menuCategoryId: flatIronCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Flat Iron angus 280g",
            "Purê de mandioquinha",
            "Arroz",
          ],
        },
      ],
    });

    // Categoria Wagyu
    const wagyuCategory = await tx.menuCategory.create({
      data: {
        name: "Wagyu",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Wagyu Ribeye",
          description:
            "Corte premium de carne wagyu grelhado no ponto desejado",
          price: 189.0,
          imageUrl: "/images/produtos/wagyu-ribeye.jpg",
          menuCategoryId: wagyuCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Wagyu Ribeye 300g", "Sal grosso", "Pimenta do reino"],
        },
      ],
    });

    // Categoria Homestyle Steak
    const homestyleCategory = await tx.menuCategory.create({
      data: {
        name: "Homestyle Steak",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "T-Bone Steak",
          description: "Clássico T-Bone grelhado com temperos da casa",
          price: 89.0,
          imageUrl: "/images/produtos/tbone-steak.jpg",
          menuCategoryId: homestyleCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["T-Bone Steak 500g", "Temperos da casa", "Sal grosso"],
        },
      ],
    });

    // Categoria Fast Salad
    const saladCategory = await tx.menuCategory.create({
      data: {
        name: "Fast Salad",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Salada Caesar com Frango",
          description: "Mix de folhas com frango grelhado e molho caesar",
          price: 35.0,
          imageUrl: "/images/produtos/caesar-salad.jpg",
          menuCategoryId: saladCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Mix de folhas",
            "Frango grelhado",
            "Croutons",
            "Molho caesar",
            "Parmesão",
          ],
        },
      ],
    });

    // Categoria Mash & Steak
    const mashCategory = await tx.menuCategory.create({
      data: {
        name: "Mash & Steak",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Filé com Purê",
          description: "Filé mignon grelhado com purê de batatas",
          price: 69.0,
          imageUrl: "/images/produtos/file-pure.jpg",
          menuCategoryId: mashCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Filé mignon 200g",
            "Purê de batatas",
            "Temperos especiais",
          ],
        },
      ],
    });

    // Categoria Fast
    const fastCategory = await tx.menuCategory.create({
      data: {
        name: "Fast",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Steak Sandwich",
          description:
            "Sanduíche de filé mignon com queijo e cebola caramelizada",
          price: 45.0,
          imageUrl: "/images/produtos/steak-sandwich.jpg",
          menuCategoryId: fastCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Pão ciabatta",
            "Filé mignon",
            "Queijo",
            "Cebola caramelizada",
          ],
        },
      ],
    });

    // Categoria Of The House
    const houseCategory = await tx.menuCategory.create({
      data: {
        name: "Of The House",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Prime Rib",
          description:
            "Costela premium grelhada com temperos especiais da casa",
          price: 129.0,
          imageUrl: "/images/produtos/prime-rib.jpg",
          menuCategoryId: houseCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Prime rib 500g", "Temperos da casa", "Sal grosso"],
        },
      ],
    });

    // Categoria BBQ FAST
    const bbqCategory = await tx.menuCategory.create({
      data: {
        name: "BBQ FAST",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "BBQ Ribs",
          description: "Costela suína com molho barbecue da casa",
          price: 79.0,
          imageUrl: "/images/produtos/bbq-ribs.jpg",
          menuCategoryId: bbqCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "Costela suína",
            "Molho barbecue da casa",
            "Temperos especiais",
          ],
        },
      ],
    });

    // Categoria Grelhados
    const grelhadosCategory = await tx.menuCategory.create({
      data: {
        name: "Grelhados",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Picanha Grelhada",
          description: "Picanha grelhada no ponto com arroz e farofa",
          price: 89.0,
          imageUrl: "/images/produtos/picanha-grelhada.jpg",
          menuCategoryId: grelhadosCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: ["Picanha 300g", "Arroz", "Farofa", "Vinagrete"],
        },
      ],
    });

    // Categoria Rodízio
    const rodizioCategory = await tx.menuCategory.create({
      data: {
        name: "Rodízio",
        restaurantId: hbStakehouse.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Rodízio Completo",
          description: "Rodízio completo de carnes com acompanhamentos",
          price: 129.0,
          imageUrl: "/images/produtos/rodizio.jpg",
          menuCategoryId: rodizioCategory.id,
          restaurantId: hbStakehouse.id,
          ingredients: [
            "12 cortes de carnes",
            "Buffet de saladas",
            "Acompanhamentos",
            "Sobremesa",
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
