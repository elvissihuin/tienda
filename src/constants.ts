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
    image: "https://files.catbox.moe/stdgkh.jpeg",
    category: "Polos",
    sizes: ["XL"]
  },
  {
    id: 2,
    name: "Slim Fit Black Jeans",
    price: 89.00,
    image: "https://files.catbox.moe/rr1fpn.jpeg",
    category: "Jeans",
    sizes: ["36"]
  },
  {
    id: 3,
    name: "Denim Trucker Jacket",
    price: 120.00,
    image: "https://files.catbox.moe/ave8jm.png",
    category: "Casacas",
    sizes: ["M"]
  },
  {
    id: 4,
    name: "Basic White Hoodie",
    price: 75.00,
    image: "https://files.catbox.moe/ez6le0.jpg",
    category: "Casacas",
    sizes: ["M", "L"]
  },
  {
    id: 5,
    name: "Cargo Pants Olive",
    price: 95.00,
    image: "https://files.catbox.moe/yfaeyg.jpeg",
    category: "Jeans",
    sizes: ["30", "32", "34"]
  },
  {
    id: 6,
    name: "Vintage Cap Black",
    price: 25.00,
    image: "https://files.catbox.moe/am2i6w.jpeg",
    category: "Accesorios",
    sizes: ["Única"]
  }
];
