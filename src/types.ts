export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
}

export interface StoreInfo {
  name: string;
  whatsapp: string;
  address: string;
  hours: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}
