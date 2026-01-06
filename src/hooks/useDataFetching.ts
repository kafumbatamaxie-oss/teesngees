import { useQuery } from "@tanstack/react-query";
import { products, Product, featuredCollections, categories } from "@/data/products";
import { aboutData, AboutData } from "@/data/about";

// Simulate API delay for development
const simulateDelay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ============= Products API =============
export const fetchProducts = async (): Promise<Product[]> => {
  await simulateDelay(800);
  return products;
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  await simulateDelay(500);
  return products.find((p) => p.id === id) || null;
};

export const fetchTrendingProducts = async (): Promise<Product[]> => {
  await simulateDelay(600);
  return products.slice(0, 4);
};

export const fetchBestSellers = async (): Promise<Product[]> => {
  await simulateDelay(700);
  return products.filter((p) => p.isBestSeller);
};

export const fetchNewArrivals = async (): Promise<Product[]> => {
  await simulateDelay(600);
  return products.filter((p) => p.isNew);
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await simulateDelay(800);
  if (category === "all") return products;
  return products.filter((p) =>
    p.category.toLowerCase().includes(category.toLowerCase())
  );
};

// ============= Collections API =============
export const fetchFeaturedCollections = async () => {
  await simulateDelay(600);
  return featuredCollections;
};

export const fetchCategories = async () => {
  await simulateDelay(400);
  return categories;
};

// ============= About API =============
export const fetchAboutData = async (): Promise<AboutData> => {
  await simulateDelay(1000);
  return aboutData;
};

// ============= React Query Hooks =============

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useTrendingProducts = () => {
  return useQuery({
    queryKey: ["products", "trending"],
    queryFn: fetchTrendingProducts,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBestSellers = () => {
  return useQuery({
    queryKey: ["products", "bestSellers"],
    queryFn: fetchBestSellers,
    staleTime: 5 * 60 * 1000,
  });
};

export const useNewArrivals = () => {
  return useQuery({
    queryKey: ["products", "newArrivals"],
    queryFn: fetchNewArrivals,
    staleTime: 5 * 60 * 1000,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products", "category", category],
    queryFn: () => fetchProductsByCategory(category),
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedCollections = () => {
  return useQuery({
    queryKey: ["collections", "featured"],
    queryFn: fetchFeaturedCollections,
    staleTime: 10 * 60 * 1000,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 30 * 60 * 1000,
  });
};

export const useAboutData = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: fetchAboutData,
    staleTime: 30 * 60 * 1000,
  });
};
