const prisma = require('../config/db');
const getProducts = async (req, res) => {
  const products = await prisma.product.findMany({
    include: { category: true }
  });
  res.json(products);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
    include: { category: true, variants: true }
  });
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
};

const createProduct = async (req, res) => {
  const { name, description, price, category, variants } = req.body;
  const imageUrl = req.file ? req.file.path : null;
  try {
    const parsedVariants = variants ? JSON.parse(variants) : [];
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        image: imageUrl,
        variants: parsedVariants.length > 0 ? {
          create: parsedVariants
        } : undefined
      },
      include: { variants: true }
    });

    res.status(201).json({ message: "Product created successfully!", data: newProduct });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON format in variants field" });
    }
    console.error(error);
    res.status(500).json({ error: "Something went wrong while creating the product." });
  }
};

module.exports = { getProducts, getProduct, createProduct };