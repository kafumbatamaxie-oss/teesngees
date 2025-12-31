export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  originalPrice: string
  isBestSeller: boolean,
  isNew: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kaslam Raglan Sweater",
    category: "Sweaters",
    price: 450,
    originalPrice : "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/Kaslam-Raglan-Sweater2.jpg",
    images: ["/images/Kaslam-Raglan-Sweater1.jpg", "/images/Kaslam-Raglan-Sweater2.jpg", "/images/Kaslam-Raglan-Sweater3.jpg"],
    colors: ["Black", "Grey", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam Raglan Sweater",
  },
  {
    id: "2",
    name: "Kaslam Round Neck-Tee",
    category: "T-Shirts",
    price: 250,
    originalPrice : "350",
    isBestSeller: true,
    isNew: true,
    image: "/images/Kasla-Round-Neck-Tee-Red1.jpg",
    images: ["/images/Kasla-Round-Neck-Tee-Red1.jpg", "/images/Kasla-Round-Neck-Tee-Red2.jpg"],
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam Round Neck-Tee",
  },
  {
    id: "3",
    name: "Kaslam V-Tee",
    category: "T-Shirts",
    price: 250,
    originalPrice : "350",
    isBestSeller: false,
    isNew: true,
    image: "/images/Kaslam-V-Tee4-1.jpg",
    images: ["/images/Kaslam-V-Tee4-1.jpg", "/images/Kaslam-V-Tee2.jpg" ],
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam V-Tee",
  },
  {
    id: "4",
    name: "Kapa Lo Dumo Round Neck-Tee",
    category: "T-Shirts",
    price: 250,
    originalPrice : "350",
    isBestSeller: true,
    isNew: false,
    image: "/images/Kapa-Lo-Dumo-Round-Tee4-1.jpg",
    images: ["/images/Kapa-Lo-Dumo-Round-Tee3-1.jpg", "/images/Kapa-Lo-Dumo-Round-Tee1-1.jpg", "/images/Kapa-Lo-Dumo-Round-Tee4-1.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kapa Lo Dumo Round Neck-Tee",
  },
  {
    id: "5",
    name: "Kapa Lo Dumo V-Tee",
    category: "T-Shirts",
    price: 250,
    originalPrice : "350",
    isBestSeller: false,
    isNew: false,
    image: "/images/kapa-lo-dumo-v.jpg",
    images: ["/images/kapa-lo-dumo-v.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kapa Lo Dumo V-Tee",
  },
  {
    id: "6",
    name: "Sun Never Sets V-Tee",
    category: "T-Shirts",
    price: 250,
    originalPrice : "350",
    isBestSeller: true,
    isNew: false,
    image: "/images/sun-never-sets-v.jpg",
    images: ["/images/sun-never-sets-v.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Sun Never Sets V-Tee",
  },
  {
    id: "7",
    name: "Sun Never Sets Raglan Sweater",
    category: "Sweaters",
    price: 450,
    originalPrice : "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/sun-never-sets-raglan.jpg",
    images: ["/images/sun-never-sets-raglan.jpg"],
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Sun Never Sets Raglan Sweater",
  },
  {
    id: "8",
    name: "The Mother City Raglan",
    category: "Sweaters",
    price: 450,
    originalPrice : "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/mother-city-raglan.jpg",
    images: ["/images/mother-city-raglan.jpg"],
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The Mother City Raglan",
  },
];


export const categories = [
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Sweaters", slug: "sweaters" },
  { name: "Kapa Lo Dumo", slug: "kapa-lo-duma" },
  { name: "Township Collection", slug: "township" },
  { name: "The Mother City", slug: "the-mother-city"}
];



export const featuredCollections = [
  {
    id: "1",
    title: "Cape Town Collection",
    description: "Iconic Cape Town map and city-inspired designs",
    image: "/images/collections/cape-town.jpg",
    link: "/collections/cape-town",
  },
  {
    id: "2",
    title: "Township Collection",
    description: "Bold township culture designs rooted in local identity",
    image: "/images/collections/township.jpg",
    link: "/collections/township",
  },
  {
    id: "3",
    title: "African Roots Collection",
    description: "African-inspired graphics celebrating heritage and pride",
    image: "/images/collections/african-roots.jpg",
    link: "/collections/african-roots",
  },
];

