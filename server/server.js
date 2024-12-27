// server.js

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para obter todos os produtos
app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Rota para adicionar um produto ao carrinho
app.post('/api/cart', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = await prisma.cart.create({
    data: {
      userId,
      productId,
      quantity,
    },
  });
  res.json(cartItem);
});

// Rota para obter os itens do carrinho
app.get('/api/cart/:userId', async (req, res) => {
  const { userId } = req.params;
  const cartItems = await prisma.cart.findMany({
    where: { userId: parseInt(userId) },
    include: { Product: true },
  });
  res.json(cartItems);
});

// Rota para remover item do carrinho
app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.cart.delete({
    where: { id: parseInt(id) },
  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
