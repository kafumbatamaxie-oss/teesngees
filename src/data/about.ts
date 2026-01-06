import aboutsection from "@/assets/about/about-section.jpg";

export interface ContentSection {
  title: string;
  content: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  intro: ContentSection;
  sections: ContentSection[];
  stats: Stat[];
  highlights: {
    title: string;
    items: string[];
  };
}

export const aboutData: AboutData = {
  hero: {
    title: "About TEES & GEES",
    subtitle: "A proudly South African clothing brand, born in Cape Town in 2009",
    image: `${aboutsection}`,
  },
  intro: {
    title: "Our Story",
    content: [
      "TEES & GEES is a proudly South African clothing brand, born in Cape Town in 2009 and formally established in March 2010. What started as a simple idea — using T-shirts as a canvas for powerful African-inspired prints — has grown into a brand worn and recognised across the world.",
    ],
  },
  sections: [
    {
      title: "From the City to the Township, and Beyond",
      content: [
        "Our very first production run was sold in Cape Town's city centre. But the real foundation of TEES & GEES was built in the townships.",
        "In 2010, we tested the market in Langa, Cape Town's oldest township. While the response there helped us learn valuable lessons, it was in 2011 — after moving to Gugulethu — that the brand truly found its home.",
        "Positioned opposite the iconic Mzoli's, one of the most famous and welcoming township destinations for tourists at the time, TEES & GEES became part of a vibrant cultural exchange.",
        "From late 2011 until 2017, Gugulethu was where the brand was shaped, supported, and embraced by both locals and visitors from around the world. During these years, TEES & GEES became synonymous with authentic African design, quality craftsmanship, and a story people could connect with.",
      ],
    },
    {
      title: "Growth, Retail, and a New Direction",
      content: [
        "Between 2018 and 2024, TEES & GEES expanded back into the city, establishing an office and operating up to six physical retail stores. Over time, however, it became clear that traditional brick-and-mortar retail was no longer the most effective way forward.",
        "Today, TEES & GEES is transitioning into an online-first brand — bringing our products directly to the global community. This shift allows us to reach customers wherever they are, including those who have loved and supported the brand over the years but could no longer easily find us.",
      ],
    },
    {
      title: "A Local Brand with a Global Footprint",
      content: [
        "Although firmly rooted in Cape Town, TEES & GEES has grown into an international brand. Our T-shirts are worn across the world — from Africa to Europe, Asia, the Americas, and beyond. Customers have taken TEES & GEES to countries such as Germany, the UK, USA, Canada, Brazil, Australia, China, Ukraine, Russia, and many more.",
        "Many of them return years later looking for us, often still wearing the same T-shirts they bought five or even ten years ago. That loyalty speaks directly to our quality, durability, and attention to detail.",
      ],
    },
    {
      title: "Made in Cape Town. Made from Scratch.",
      content: [
        "Cape Town is not just our home — it is part of our identity. Historically a hub of South Africa's clothing and textile industry, the city inspires how we operate.",
        "At TEES & GEES we do not buy ready-made T-shirts. We source fabric locally and manufacture every garment from scratch. Cutting, sewing, printing, and finishing are all done in Cape Town — primarily in townships such as Elsies River and Mitchells Plain.",
        "We deliberately partner with skilled, home-based manufacturers — many of whom previously worked in large textile factories that have since closed. By working with these small businesses, we support local livelihoods, preserve valuable skills, and keep production authentic and sustainable.",
        "Every T-shirt we sell is 100% locally made.",
      ],
    },
    {
      title: "Fabric, Fit, and Finish",
      content: [
        "Our T-shirts are made from 100% cotton single jersey, chosen for comfort, breathability, and skin-friendliness. The fabric is soft, durable, and suitable for people with sensitive skin, as it does not cause irritation or friction.",
        "We typically use 160–165gsm cotton, the industry standard for premium T-shirts, and occasionally 180gsm when a slightly heavier feel is required.",
        "The fit is intentionally slim-cut — designed to follow the body's natural shape for a clean, flattering look. For comfort, we recommend choosing one size up if you prefer a more relaxed fit.",
        "One of our most distinctive features is the bound neck finish. Instead of traditional ribbing, we use binding to ensure the collar keeps its shape over time. Even after years of wear and washing, the neckline remains neat and structured.",
        "Sleeves are slightly tapered for a fitted look, creating a sharp silhouette that many customers describe as flattering and confident.",
      ],
    },
    {
      title: "Prints with Purpose",
      content: [
        "At the heart of TEES & GEES are our prints.",
        "We don't simply sell T-shirts — we sell stories, messages, and African-inspired designs. Each print is created to celebrate Africa in a positive, contemporary light. The T-shirt becomes the medium through which the artwork is expressed.",
        "Our designs are applied using screen printing, allowing the ink to seep into the fabric rather than sit on top like vinyl. This creates a more authentic finish where the print becomes part of the garment itself.",
      ],
    },
    {
      title: "A Brand for the Whole Family",
      content: [
        "TEES & GEES is a family brand. We offer sizes ranging from XS to 3XL, as well as children's sizes from 1 year to 12 years old. This makes it possible for every member of the family to be part of the story.",
        "Our core customer base typically falls between the ages of 25 and 65 — people who appreciate quality, fit, and meaning. While younger fashion trends currently favour looser fits, we continue to evolve while staying true to our identity.",
      ],
    },
    {
      title: "Quality, Value, and Longevity",
      content: [
        "Durability is not an accident — it is a choice. From fabric selection to finishing, every step is focused on longevity. Our customers consistently return because they know what to expect: a T-shirt that lasts, looks good, and offers real value for money.",
        "TEES & GEES stands for quality craftsmanship, African pride, and timeless design — built in Cape Town, worn worldwide.",
      ],
    },
  ],
  stats: [
    { value: "2009", label: "Founded" },
    { value: "100%", label: "Locally Made" },
    { value: "15+", label: "Years of Excellence" },
    { value: "Global", label: "Reach" },
  ],
  highlights: {
    title: "What Sets Us Apart",
    items: [
      "100% cotton single jersey fabric",
      "160-180gsm premium quality",
      "Slim-cut flattering fit",
      "Bound neck finish for durability",
      "Screen printed designs",
      "Sizes from 1 year to 3XL",
      "Made entirely in Cape Town",
      "Supporting local manufacturers",
    ],
  },
};
