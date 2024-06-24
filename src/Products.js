import product1 from "./assets/26 Stylish Armchairs For All Budgets.jpg";
import product2 from "./assets/494ebdef-5108-4074-85b4-675dc70b7d35.jpg";
import product3 from "./assets/cea7d268-7e91-453c-ad02-2a627daeed5e.jpg";
import product4 from "./assets/It's back! The Range chair that caused a shopping frenzy last year is now available in navy.jpg";
import product5 from "./assets/Oversized Chaise Lounge Chairs - Foter.jpg";
import product6 from "./assets/Panton Chair Anniversary Competition and Charity Auction.jpg";
import product7 from "./assets/Vladimir Kagan's Annecy Collection - his final work - dares you to decide_ Furniture designer - or sculptor_ - Retro Renovation.jpg";
import product8 from "./assets/Wave - Stratum Bespoke.jpg";
import product9 from "./assets/Who wants a shell inspired chaise in their home_ If so, we can make it! 🛋️✨.jpg";
import product10 from "./assets/Who wants an avocado inspired ball chair and swing chair in their home_🪑✨.jpg";
import product11 from "./assets/Wood Rocking Sofa Chair_ Exceptional Comfort and Style - Style A.jpg";
import product12 from "./assets/Wooden Chair Showing Movement and Material Conscious Design.jpg";

export const PRODUCTS = [
  {
    id: 1,
    productImage: product3,
    productName: "Aria Accent Chair",
    price: 19.99,
  },
  {
    id: 2,
    productImage: product10,
    productName: "Avocado chair",
    price: 19.99,
  },
  {
    id: 3,
    productImage: product12,
    productName: "Vogue Velvet Chair",
    price: "199.99",
  },
  {
    id: 4,
    productImage: product9,
    productName: "Shell chair",
    price: 19.99,
  },
  {
    id: 5,
    productImage: product5,
    productName: "Orion Office Chair",
    price: 19.99,
  },
  {
    id: 6,
    productImage: product6,
    productName: "Eden Dining Chair",
    price: 19.99,
  },
  {
    id: 7,
    productImage: product4,
    productName: "Classic Club Chair",
    price: 19.99,
  },
  {
    id: 8,
    productImage: product8,
    productName: "Infinity Console Table",
    price: 19.99,
  },
  {
    id: 9,
    productImage: product3,
    productName: "Aria Accent Chair",
    price: 19.99,
  },
  {
    id: 10,
    productImage: product10,
    productName: "Avocado chair",
    price: 19.99,
  },
  {
    id: 11,
    productImage: product1,
    productName: "Accent Chair",
    price: 19.99,
  },
  {
    id: 12,
    productImage: product2,
    productName: "Avoo chair",
    price: 19.99,
  },
  {
    id: 13,
    productImage: product7,
    productName: "Vog Chair",
    price: "199.99",
  },
  {
    id: 14,
    productImage: product11,
    productName: "Ell chair",
    price: 19.99,
  },
  {
    id: 15,
    productImage: product1,
    productName: "Orion Office Chair",
    price: 19.99,
  },
  {
    id: 16,
    productImage: product2,
    productName: "Eden Dining Chair",
    price: 19.99,
  },
  {
    id: 17,
    productImage: product12,
    productName: "Classic Club Chair",
    price: 19.99,
  },
  {
    id: 18,
    productImage: product6,
    productName: "Infinity Console Table",
    price: 19.99,
  },
  {
    id: 19,
    productImage: product8,
    productName: "Aria Accent Chair",
    price: 19.99,
  },
  {
    id: 20,
    productImage: product10,
    productName: "Avocado chair",
    price: 19.99,
  },
  // ...
];

const Product = {
  async getAllProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 2000); // simulate a 2-second delay
    });
  },

  async getProductById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = PRODUCTS.find((product) => product.id === id);
        resolve(product);
      }, 2000); // simulate a 2-second delay
    });
  },
};

export default Product;
