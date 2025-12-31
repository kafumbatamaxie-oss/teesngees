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
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kaslam Raglan Sweater",
    category: "Sweaters",
    price: 450,
    image: "/images/kaslam-raglan.jpg",
    images: ["/images/kaslam-raglan.jpg"],
    colors: ["Black", "Grey", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam Raglan Sweater",
  },
  {
    id: "2",
    name: "Kaslam Round Neck-Tee",
    category: "T-Shirts",
    price: 250,
    image: "/images/kaslam-round-neck.jpg",
    images: ["/images/kaslam-round-neck.jpg"],
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam Round Neck-Tee",
  },
  {
    id: "3",
    name: "Kaslam V-Tee",
    category: "T-Shirts",
    price: 250,
    image: "/images/kaslam-v-tee.jpg",
    images: ["/images/kaslam-v-tee.jpg"],
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kaslam V-Tee",
  },
  {
    id: "4",
    name: "Kapa Lo Dumo Round Neck-Tee",
    category: "T-Shirts",
    price: 250,
    image: "/images/kapa-lo-dumo-round.jpg",
    images: ["/images/kapa-lo-dumo-round.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Kapa Lo Dumo Round Neck-Tee",
  },
  {
    id: "5",
    name: "Kapa Lo Dumo V-Tee",
    category: "T-Shirts",
    price: 250,
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

