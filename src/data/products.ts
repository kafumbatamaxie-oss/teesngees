export type Gender = "men" | "women" | "kids";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export interface Variant {
  color: string;
  size: Size;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  genders: Gender[];
  category: string;
  categorySlug: "round-neck-tee" | "v-tee" | "sweater" | "accessories";
  price: number;
  image: string;          // default image
  images: string[];       // gallery
  variants: Variant[];    // 👈 INVENTORY LIVES HERE
  description: string;
  originalPrice: string;
  isBestSeller: boolean;
  isNew: boolean;
}


export const products: Product[] = [
  {
    id: "100",
    name: "African Map",
    genders: ["men", "women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: false,
    isNew: false,
    image: "/images/store/african-map-tee-default.png",
    images: [
      "/images/store/african-map-tee-bottle-green-1.png",
      "/images/store/african-map-tee-bottle-green-2.png",
      "/images/store/african-map-tee-bottle-green-1.png",
    ],
    variants: [
      { color: "Bottle green", size: "XS", quantity: 1 },
      { color: "Bottle green", size: "S", quantity: 3 },
      { color: "Bottle green", size: "M", quantity: 2 },
      { color: "Bottle green", size: "L", quantity: 6 },
      { color: "Bottle green", size: "XL", quantity: 2 },
      { color: "Bottle green", size: "XXL", quantity: 3 },
      { color: "Bottle green", size: "XXXL", quantity: 2 },
    ],
    description: "Unisex Cape Town logo tee",
  },

  
];


// export const upcomingProducts: Product[] = [
//   {
//     id: "1",
//     name: "Kaslam Raglan Sweater",
//     category: "Round Neck Tee",
//     categorySlug: "roud-neck-tee",
//     price: 450,
//     originalPrice : "550",
//     isBestSeller: true,
//     isNew: false,
//     image: "/images/Kaslam-Raglan-Sweater2.jpg",
//     images: ["/images/Kaslam-Raglan-Sweater1.jpg", "/images/Kaslam-Raglan-Sweater2.jpg", "/images/Kaslam-Raglan-Sweater3.jpg"],
//     colors: ["Black", "Grey", "White"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Kaslam Raglan Sweater",
//   },
//   {
//     id: "2",
//     name: "Kaslam Round Neck-Tee",
//     category: "Round Neck Tee",
//     categorySlug: "roud-neck-tee",
//     price: 250,
//     originalPrice : "350",
//     isBestSeller: true,
//     isNew: false,
//     image: "/images/Kasla-Round-Neck-Tee-Red1.jpg",
//     images: ["/images/Kasla-Round-Neck-Tee-Red1.jpg", "/images/Kasla-Round-Neck-Tee-Red2.jpg"],
//     colors: ["Black", "White", "Navy"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Kaslam Round Neck-Tee",
//   },
//   {
//     id: "3",
//     name: "Kaslam V-Tee",
//     category: "T-Shirts",
//     price: 250,
//     originalPrice : "350",
//     categorySlug: "roud-neck-tee",
//     isBestSeller: false,
//     isNew: true,
//     image: "/images/Kaslam-V-Tee4-1.jpg",
//     images: ["/images/Kaslam-V-Tee4-1.jpg", "/images/Kaslam-V-Tee2.jpg" ],
//     colors: ["Black", "White", "Grey"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Kaslam V-Tee",
//   },
//   {
//     id: "4",
//     name: "Kapa Lo Dumo Round Neck-Tee",
//     category: "T-Shirts",
//     price: 250,
//     originalPrice : "350",
//     categorySlug: "roud-neck-tee",
//     isBestSeller: true,
//     isNew: false,
//     image: "/images/Kapa-Lo-Dumo-Round-Tee4-1.jpg",
//     images: ["/images/Kapa-Lo-Dumo-Round-Tee3-1.jpg", "/images/Kapa-Lo-Dumo-Round-Tee1-1.jpg", "/images/Kapa-Lo-Dumo-Round-Tee4-1.jpg"],
//     colors: ["Black", "White"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Kapa Lo Dumo Round Neck-Tee",
//   },
//   {
//     id: "5",
//     name: "Kapa La Duma V-Tee",
//     category: "T-Shirts",
//     price: 250,
//     categorySlug: "roud-neck-tee",
//     originalPrice : "350",
//     isBestSeller: false,
//     isNew: false,
//     image: "/images/Kapa-La-Duma-V-Tee2.jpg",
//     images: ["/images/Kapa-La-Duma-V-Tee2.jpg", "/images/Kapa-La-Duma-V-Tee5.jpg", "/images/Kapa-La-Duma-V-Tee3.jpg"],
//     colors: ["Black", "White"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Kapa Lo Dumo V-Tee",
//   },
//   {
//     id: "6",
//     name: "Sun Never Sets V-Tee",
//     category: "T-Shirts",
//     price: 250,
//     categorySlug: "roud-neck-tee",
//     originalPrice : "350",
//     isBestSeller: true,
//     isNew: false,
//     image: "/images/P220421131621_bottom_CR2_1-scaled.jpg",
//     images: ["/images/P220421131621_bottom_CR2_1-scaled.jpg", "/images/P220421131621_bottom_CR2_1-scaled.jpg"],
//     colors: ["Black", "White"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Sun Never Sets V-Tee",
//   },
//   {
//     id: "7",
//     name: "Sun Never Sets Raglan Sweater",
//     category: "Sweaters",
//     categorySlug: "roud-neck-tee",
//     price: 450,
//     originalPrice : "550",
//     isBestSeller: false,
//     isNew: false,
//     image: "/images/P220421150455_Top_CR2_5-scaled.jpg",
//     images: ["/images/04/P220421150455_Top_CR2_5-scaled.jpg", "/images/04/P220421145941_Top_CR2_3-scaled.jpg"],
//     colors: ["Black", "Grey"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "Sun Never Sets Raglan Sweater",
//   },
//   {
//     id: "8",
//     name: "The Mother City Raglan",
//     category: "Sweaters",
//     categorySlug: "roud-neck-tee",
//     price: 450,
//     originalPrice : "550",
//     isBestSeller: false,
//     isNew: false,
//     image: "/images/P220421151110_full-body-tall_CR2_5-scaled.jpg",
//     images: ["/images/P220421151110_full-body-tall_CR2_5-scaled.jpg", "/images/P220421151110_full-body-tall_CR2_3-scaled.jpg", "/images/P220421151110_full-body-tall_CR2_2-scaled.jpg"],
//     colors: ["Black", "Grey"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     description: "The Mother City Raglan",
//   },
// ]


export const categories = [
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Sweaters", slug: "sweaters" },
  { name: "Kapa Lo Dumo", slug: "kapa-lo-duma" },
  { name: "Township Collection", slug: "township" },
  { name: "The Mother City", slug: "the-mother-city"}
];



export const featuredCollections = [
  {
    id: "3",
    title: "Africa Cape Town Map",
    description: "African-inspired graphics of Cape Town , where the Sun Never Sets",
    image: "/images/trending/white-t-2.png",
    link: "/collections/african-roots",
    ctaLink: "/shop?category=kids",
    ctaSecondary: "Explore",
    ctaSecondaryLink: "/shop",
  },
  {
    id: "1",
    title: "Gugulethu Cape Town",
    description: "Iconic Cape Town Gugulethu T-shirt",
    image: "/images/trending/blue-t-1.png",
    link: "/shop?category=gugulethu",
    cta: "Shop Now",
    ctaLink: "/shop?category=men",
    ctaSecondary: "Explore",
    ctaSecondaryLink: "/shop",
  },
  
  {
    id: "2",
    title: "The Mothercity",
    description: "The Mothercity Cape Town designs rooted in local identity",
    image: "/images/trending/white-t-1.png",
    link: "/collections/township",
    ctaLink: "/shop?category=women",
    ctaSecondary: "Explore",
    ctaSecondaryLink: "/shop",
  },
  
];


export const GOLD = "#B7975A"

// export const GOLD = "#7e5ab7ff"
