import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import { ProductDetails } from "../types/ProductDetailsType";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductDetails[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        if (products && products.length > 0) {
          // Transform the API response to match our ProductDetails type
          const transformedProducts = products.map(
            (product: ProductDetails) => ({
              ...product,
              mainImage: product.main_image,
              outstandingFeatures: product.outstanding_features,
              washingInstructions: product.washing_instructions,
            })
          );
          setProducts(transformedProducts);
        }
      } catch (err) {
        setError(`${"Failed to fetch product data,"} ${err as string}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

// Add a single product hook for convenience
export const useProduct = (productId?: number) => {
  const { products, loading, error } = useProducts();

  const product = products
    ? productId
      ? products.find((p) => p.id === productId)
      : products[0]
    : null;

  return { product, loading, error };
};
