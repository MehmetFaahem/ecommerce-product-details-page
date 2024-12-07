import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import { ProductDetails } from "../types/ProductDetailsType";

export const useProduct = () => {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        if (products && products.length > 0) {
          // Transform the API response to match our ProductDetails type
          const transformedProduct = {
            ...products[0],
            mainImage: products[0].main_image,
            outstandingFeatures: products[0].outstanding_features,
            washingInstructions: products[0].washing_instructions,
          };
          setProduct(transformedProduct);
        }
      } catch (err) {
        setError(`${"Failed to fetch product data,"} ${err as string}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return { product, loading, error };
};
