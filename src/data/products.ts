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

const shuffle = (array) => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}


const rawProducts = [
  // The Mother City — City of All Mothers
    {
    id: "1033442248",
    name: "The Mother City — City of All Mothers",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/the-mother-city-cape-town-men.png",
    images: [
      "/images/men/the-mother-city-cape-town-men.png",
      "/images/men/the-mother-city-cape-town-men.png",
      "/images/men/the-mother-city-cape-town-men.png",
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
    description: "Cape Town is known as The Mother City — a place of beauty, contrast, and deep emotional pull. This print reflects the city’s nurturing yet unpredictable nature: calm and wild, warm and stormy — sometimes all in one day. Much like a mother, the city protects, challenges, and inspires those who call it home. More than a destination, Cape Town is a feeling — welcoming, grounding, and unforgettable.",
    },
    {
    id: "25555452208",
    name: "The Mother City — City of All Mothers",
    genders: ["kids"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/kids/the-mother-city-cape-town-kids.png",
    images: [
      "/images/kids/the-mother-city-cape-town-kids.png",
      "/images/kids/the-mother-city-cape-town-kids.png",
      "/images/kids/the-mother-city-cape-town-kids.png",
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
    description: "Cape Town is known as The Mother City — a place of beauty, contrast, and deep emotional pull. This print reflects the city’s nurturing yet unpredictable nature: calm and wild, warm and stormy — sometimes all in one day. Much like a mother, the city protects, challenges, and inspires those who call it home. More than a destination, Cape Town is a feeling — welcoming, grounding, and unforgettable.",
    },
    {
    id: "30788888",
    name: "The Mother City — City of All Mothers",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/the-mother-city-cape-town-women.png",
    images: [
      "/images/women/the-mother-city-cape-town-women.png",
      "/images/women/the-mother-city-cape-town-women.png",
      "/images/women/the-mother-city-cape-town-women.png",
     
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
    description: "Cape Town is known as The Mother City — a place of beauty, contrast, and deep emotional pull. This print reflects the city’s nurturing yet unpredictable nature: calm and wild, warm and stormy — sometimes all in one day. Much like a mother, the city protects, challenges, and inspires those who call it home. More than a destination, Cape Town is a feeling — welcoming, grounding, and unforgettable.",
    },


    // Cape Town
    {
      id: "1111954255654855521456501",
      name: "Cape Town",
      genders: ["men"],
      category: "Round Neck Tee",
      categorySlug: "round-neck-tee",
      price: 280,
      originalPrice: "550",
      isBestSeller: true,
      isNew: false,
      image: "/images/men/cape-town-sun-never-set-men.png",
      images: [
        "/images/men/cape-town-sun-never-set-men.png",
        "/images/men/cape-town-sun-never-set-men.png",
        "/images/men/cape-town-sun-never-set-men.png",
      ],
      variants: [
        { color: "Bottle green", size: "XS", quantity: 2 },
        { color: "Bottle green", size: "S", quantity: 3 },
        { color: "Bottle green", size: "M", quantity: 3 },
        { color: "Bottle green", size: "L", quantity: 5 },
        { color: "Bottle green", size: "XL", quantity: 3 },
        { color: "Bottle green", size: "XXL", quantity: 2 },
        { color: "Bottle green", size: "XXXL", quantity: 2 },
      ],
      description: "Inspired by Cape Town’s unique position at the southern tip of Africa, this print celebrates the idea that the sun sets last here — and symbolically, never truly goes down. Where the Sun Never Sets” speaks to more than geography. It reflects a city that is constantly alive — vibrant by day, electric by night. A place where creativity, culture, and ambition move around the clock. One of our best-selling prints, this design captures Cape Town as a city of light, motion, and endless possibility.",
    },
    {
    id: "201",
    name: "Cape Town",
    genders: ["kids"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/kids/cape-town-sun-never-set-kids.png",
    images: [
      "/images/kids/cape-town-sun-never-set-kids.png",
      "/images/kids/cape-town-sun-never-set-kids.png",
      "/images/kids/cape-town-sun-never-set-kids.png",
    ],
    variants: [
      { color: "Bottle green", size: "XS", quantity: 2 },
      { color: "Bottle green", size: "S", quantity: 3 },
      { color: "Bottle green", size: "M", quantity: 3 },
      { color: "Bottle green", size: "L", quantity: 5 },
      { color: "Bottle green", size: "XL", quantity: 3 },
      { color: "Bottle green", size: "XXL", quantity: 2 },
      { color: "Bottle green", size: "XXXL", quantity: 2 },
    ],
    description: "Inspired by Cape Town’s unique position at the southern tip of Africa, this print celebrates the idea that the sun sets last here — and symbolically, never truly goes down. Where the Sun Never Sets” speaks to more than geography. It reflects a city that is constantly alive — vibrant by day, electric by night. A place where creativity, culture, and ambition move around the clock. One of our best-selling prints, this design captures Cape Town as a city of light, motion, and endless possibility.",
    },
    {
      id: "301",
      name: "Cape Town",
      genders: ["women"],
      category: "Round Neck Tee",
      categorySlug: "round-neck-tee",
      price: 280,
      originalPrice: "550",
      isBestSeller: true,
      isNew: false,
      image: "/images/women/cape-town-sun-never-set-women.png",
      images: [
        "/images/women/cape-town-sun-never-set-women.png",
        "/images/women/cape-town-sun-never-set-women.png",
        "/images/women/cape-town-sun-never-set-women.png",
      
      ],
      variants: [
        { color: "Bottle green", size: "XS", quantity: 2 },
        { color: "Bottle green", size: "S", quantity: 3 },
        { color: "Bottle green", size: "M", quantity: 3 },
        { color: "Bottle green", size: "L", quantity: 5 },
        { color: "Bottle green", size: "XL", quantity: 3 },
        { color: "Bottle green", size: "XXL", quantity: 2 },
        { color: "Bottle green", size: "XXXL", quantity: 2 },
      ],
      description: "Inspired by Cape Town’s unique position at the southern tip of Africa, this print celebrates the idea that the sun sets last here — and symbolically, never truly goes down. Where the Sun Never Sets” speaks to more than geography. It reflects a city that is constantly alive — vibrant by day, electric by night. A place where creativity, culture, and ambition move around the clock. One of our best-selling prints, this design captures Cape Town as a city of light, motion, and endless possibility.",
    },

   
    // Kas’lam Cape Town
   {
    id: "190003",
    name: "Kas’lam Cape Town",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/kaslam-capetown-men.png",
    images: [
      "/images/men/kaslam-capetown-men.png",
      "/images/men/kaslam-capetown-men.png",
      "/images/men/kaslam-capetown-men.png",
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
    description: "A detailed map design featuring 54 townships across Cape Town, honouring the places that shaped the city’s culture, sound, and soul. This print celebrates township life as the heartbeat of the Mother City.",
   },
   {
    id: "2111111111103",
    name: "Kas’lam Cape Town",
    genders: ["kids"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/kids/kaslam-capetown-kids.png",
    images: [
      "/images/kids/kaslam-capetown-kids.png",
      "/images/kids/kaslam-capetown-kids.png",
      "/images/kids/kaslam-capetown-kids.png",
      
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
    description: "A detailed map design featuring 54 townships across Cape Town, honouring the places that shaped the city’s culture, sound, and soul. This print celebrates township life as the heartbeat of the Mother City.",
   },
   {
    id: "30222223",
    name: "Kas’lam Cape Town",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/kaslam-capetown-women.png",
    images: [
       "/images/women/kaslam-capetown-women.png",
        "/images/women/kaslam-capetown-women.png",
         "/images/women/kaslam-capetown-women.png",   
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
    description: "A detailed map design featuring 54 townships across Cape Town, honouring the places that shaped the city’s culture, sound, and soul. This print celebrates township life as the heartbeat of the Mother City.",
   },


    // Africa Map — Cape Town Origin
   {
    id: "1023333332257",
    name: "Africa Map — Cape Town Origin",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/africa-map-cape-town-origin-men.png",
    images: [
      "/images/men/africa-map-cape-town-origin-men.png",
      "/images/men/africa-map-cape-town-origin-men.png",
      "/images/men/africa-map-cape-town-origin-men.png",
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
    description: "This minimalist Africa map print marks the very bottom of the continent with a single dot — Cape Town. Simple yet powerful, it represents origin, grounding, and perspective. It speaks to the brand’s roots and reminds the wearer that every journey starts somewhere. A quiet statement of identity and place, this print is about knowing where you come from — and standing firmly in it.",
   },
   {
    id: "168989866496332502",
    name: "Africa Map — Cape Town Origin",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/africa-map-cape-town-origin-women.png",
    images: [
      "/images/women/africa-map-cape-town-origin-women.png",
      "/images/women/africa-map-cape-town-origin-women.png",
      "/images/women/africa-map-cape-town-origin-women.png",
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
    description: "This minimalist Africa map print marks the very bottom of the continent with a single dot — Cape Town. Simple yet powerful, it represents origin, grounding, and perspective. It speaks to the brand’s roots and reminds the wearer that every journey starts somewhere. A quiet statement of identity and place, this print is about knowing where you come from — and standing firmly in it.",
   },

   

  //  Kas’lam Africa
   {
    id: "1055555555577884",
    name: "Kas’lam Africa",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/kaslam-africa-men.png",
    images: [
      "/images/men/kaslam-africa-men.png",
      "/images/men/kaslam-africa-men.png",
      "/images/men/kaslam-africa-men.png",
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
    description: "An African continent map featuring all 54 African countries, unified under the Kas’lam concept. It represents Pan-African identity — different nations, one shared home.",
   },
   {
    id: "666304",
    name: "Kas’lam Africa",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/kaslam-africa-women.png",
    images: [
      "/images/women/kaslam-africa-women.png",
      "/images/women/kaslam-africa-women.png",
      "/images/women/kaslam-africa-women.png",
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
    description: "An African continent map featuring all 54 African countries, unified under the Kas’lam concept. It represents Pan-African identity — different nations, one shared home.",
   },

    // The Big Five — Africa’s Icons
    {
    id: "1321298000000007",
    name: "The Big Five — Africa’s Icons",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/big-five-men.png",
    images: [
      "/images/men/big-five-men.png",
      "/images/men/big-five-men.png",
      "/images/men/big-five-men.png",
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
    description: "This print showcases Africa’s legendary Big Five: Lion, Elephant, Buffalo, Rhino, and Leopard, arranged in a powerful half-moon design around the African continent. Originally named by early game hunters, the Big Five have come to symbolise Africa’s wildlife heritage and conservation legacy. With no captions, the design allows the imagery to speak for itself — bold, balanced, and instantly recognisable. A timeless celebration of Africa’s natural power.",
    },
    {
    id: "32111107",
    name: "The Big Five — Africa’s Icons",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/big-five-women.png",
    images: [
      "/images/women/big-five-women.png",
      "/images/women/big-five-women.png",
      "/images/women/big-five-women.png",
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
    description: "This print showcases Africa’s legendary Big Five: Lion, Elephant, Buffalo, Rhino, and Leopard, arranged in a powerful half-moon design around the African continent. Originally named by early game hunters, the Big Five have come to symbolise Africa’s wildlife heritage and conservation legacy. With no captions, the design allows the imagery to speak for itself — bold, balanced, and instantly recognisable. A timeless celebration of Africa’s natural power.",
    },

    // Kas’lam Soweto
   {
    id: "00005105",
    name: "Kas’lam Soweto",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/kaslam-soweto-men.png",
    images: [
      "/images/men/kaslam-soweto-men.png",
      "/images/men/kaslam-soweto-men.png",
      "/images/men/kaslam-soweto-men.png",
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
    description: "Dedicated to Soweto, the largest and most influential township in Africa, this design features 54 of Soweto’s oldest and most iconic townships. It honours resistance, history, and cultural legacy. Each Kas’lam print is a wearable map of pride — where place becomes identity.",
   },
   {
    id: "3052222222222222222222222222222222",
    name: "Kas’lam Soweto",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/kaslam-soweto-women.png",
    images: [
      "/images/women/kaslam-soweto-women.png",
      "/images/women/kaslam-soweto-women.png",
      "/images/women/kaslam-soweto-women.png",
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
    description: "Dedicated to Soweto, the largest and most influential township in Africa, this design features 54 of Soweto’s oldest and most iconic townships. It honours resistance, history, and cultural legacy. Each Kas’lam print is a wearable map of pride — where place becomes identity.",
   },


  //  Cape Town Sun Never Set
   {
    id: "7077777777771",
    name: "Cape Town Sun Never Set",
    genders: ["men"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/men/cape-town-sun-never-set-men.png",
    images: [
      "/images/men/cape-town-sun-never-set-men.png",
      "/images/men/cape-town-sun-never-set-men.png",
      "/images/men/cape-town-sun-never-set-men.png",
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
    description: "Dedicated to Soweto, the largest and most influential township in Africa, this design features 54 of Soweto’s oldest and most iconic townships. It honours resistance, history, and cultural legacy. Each Kas’lam print is a wearable map of pride — where place becomes identity.",
   },
   {
    id: "22222223333333333703",
    name: "Cape Town Sun Never Set",
    genders: ["women"],
    category: "Round Neck Tee",
    categorySlug: "round-neck-tee",
    price: 280,
    originalPrice: "550",
    isBestSeller: true,
    isNew: false,
    image: "/images/women/cape-town-sun-never-set-women.png",
    images: [
      "/images/women/cape-town-sun-never-set-women.png",
      "/images/women/cape-town-sun-never-set-women.png",
      "/images/women/cape-town-sun-never-set-women.png",
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
    description: "Inspired by Cape Town’s unique position at the southern tip of Africa, this print celebrates the idea that the sun sets last here — and symbolically, never truly goes down. “Where the Sun Never Sets” speaks to more than geography. It reflects a city that is constantly alive — vibrant by day, electric by night. A place where creativity, culture, and ambition move around the clock. One of our best-selling prints, this design captures Cape Town as a city of light, motion, and endless possibility.",
   },



   


  

  
]


export const products: Product[] = shuffle(rawProducts)


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
    image: "/images/store/white-t-2.png",
    link: "/collections/african-roots",
    ctaLink: "/shop?category=kids",
    ctaSecondary: "Explore",
    ctaSecondaryLink: "/shop",
  },
  {
    id: "1",
    title: "Gugulethu Cape Town",
    description: "Iconic Cape Town Gugulethu T-shirt",
    image: "/images/store/blue-t-1.png",
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
    image: "/images/store/white-t-1.png",
    link: "/collections/township",
    ctaLink: "/shop?category=women",
    ctaSecondary: "Explore",
    ctaSecondaryLink: "/shop",
  },
  
];


export const GOLD = "#B7975A"

// export const GOLD = "#7e5ab7ff"
