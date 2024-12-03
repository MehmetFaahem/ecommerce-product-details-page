export interface ProductImage {
  src: string;
  alt: string;
  id: string;
}

export interface ReviewStats {
  rating: number;
  totalReviews: number;
  totalSold: number;
}

export interface ProductPrice {
  currentPrice: number;
  originalPrice: number;
  discount: number;
  currency: string;
}

export interface SocialShare {
  platform: string;
  icon: string;
  url: string;
}

export interface PaymentMethod {
  provider: string;
  icon: string;
  id: string;
}

export interface ProductSize {
  value: string;
  label: string;
  available: boolean;
  selected: boolean;
}

export interface ProductColor {
  value: string;
  label: string;
  hex: string;
  selected: boolean;
}

export interface ProductDetails {
  id: string;
  name: string;
  description: string;
  sku: string;
  categories: string[];
  images: ProductImage[];
  mainImage: ProductImage;
  reviews: ReviewStats;
  pricing: ProductPrice;
  sizes: ProductSize[];
  colors: ProductColor[];
  stock: {
    status: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK";
    quantity: number;
  };
  delivery: {
    estimatedRange: {
      start: string;
      end: string;
    };
    returnPeriod: number;
  };
  socialShares: SocialShare[];
  paymentMethods: PaymentMethod[];
}

export interface ActionButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}
