import { Product, StoreInfo } from './types';

export const STORE_INFO: StoreInfo = {
  name: "URBAN STYLE",
  whatsapp: "51928567606", // Example number
  address: "jr. Apurimac, Quillabamba, Cusco",
  hours: "Lun - Sáb: 10:00 AM - 9:00 PM | Dom: 11:00 AM - 7:00 PM",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 45.00,
    image: "https://files.catbox.moe/1n15kq.jpg",
    category: "Polos",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Slim Fit Black Jeans",
    price: 89.00,
    image: "https://picsum.photos/seed/jeans1/600/800",
    category: "Jeans",
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 3,
    name: "Denim Trucker Jacket",
    price: 120.00,
    image: "https://picsum.photos/seed/jacket1/600/800",
    category: "Casacas",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 4,
    name: "Basic White Hoodie",
    price: 75.00,
    image: "https://picsum.photos/seed/hoodie1/600/800",
    category: "Casacas",
    sizes: ["S", "M", "L"]
  },
  {
    id: 5,
    name: "Cargo Pants Olive",
    price: 95.00,
    image: "https://picsum.photos/seed/pants1/600/800",
    category: "Jeans",
    sizes: ["30", "32", "34"]
  },
  {
    id: 6,
    name: "Vintage Cap Black",
    price: 25.00,
    image: "https://picsum.photos/seed/cap1/600/800",
    category: "Accesorios",
    sizes: ["Única"]
  }
];
