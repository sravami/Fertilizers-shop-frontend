// src/services/productService.js

const products = [
  // Seeds
  { id: 1, name: "Sanaga Seeds", price: 50, image: "/images/sanaga.jpg", description: "High-quality Sanaga seeds for your farm.", category: "Seeds", inStock: true },
  { id: 2, name: "Kandi Seeds", price: 70, image: "/images/kandi.jpg", description: "Premium Kandi seeds for optimal growth.", category: "Seeds", inStock: true },
  { id: 3, name: "Minumulu Seeds", price: 60, image: "/images/minumulu.jpg", description: "Healthy Minumulu seeds for your garden.", category: "Seeds", inStock: true },
  { id: 4, name: "Vari Seeds", price: 80, image: "/images/vari.jpg", description: "High-yield Vari seeds for farmers.", category: "Seeds", inStock: false },

  // Fertilizers
  { id: 5, name: "Uriya Fertilizer", price: 500, image: "/images/uriya.jpg", description: "Rich in nutrients, boosts crop growth.", category: "Fertilizer", inStock: true },
  { id: 6, name: "Paspate Fertilizer", price: 750, image: "/images/paspate.jpg", description: "Enhances soil fertility for better yield.", category: "Fertilizer", inStock: true },
  { id: 7, name: "Nitrogen Fertilizer", price: 600, image: "/images/nitrogen.jpg", description: "Essential nitrogen fertilizer for healthy crops.", category: "Fertilizer", inStock: true },
  { id: 8, name: "Phosphate Fertilizer", price: 700, image: "/images/phosphate.jpg", description: "Boosts root development and fruiting.", category: "Fertilizer", inStock: false },
];

export async function fetchProducts() {
  await new Promise((res) => setTimeout(res, 500));
  return products;
}

export async function fetchProductById(id) {
  await new Promise((res) => setTimeout(res, 500));
  return products.find((p) => p.id === Number(id));
}
