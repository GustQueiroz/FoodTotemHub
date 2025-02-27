import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function updateProductImages() {
  try {
    // Atualizar Combo Whopper
    await prisma.product.updateMany({
      where: {
        name: 'Combo Whopper'
      },
      data: {
        imageUrl: 'https://static.ifood-static.com.br/image/upload/t_high/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202311301645_IG2V_i.jpg'
      }
    });

    // Atualizar Combo Stacker Triplo
    await prisma.product.updateMany({
      where: {
        name: 'Combo Stacker Triplo'
      },
      data: {
        imageUrl: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202306291431_328J_i.jpg'
      }
    });

    console.log('Imagens atualizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar as imagens:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateProductImages(); 