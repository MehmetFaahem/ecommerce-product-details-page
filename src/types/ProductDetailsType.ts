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

export interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface InstructionProps {
  text: string;
}

export interface ProductCardProps {
  image: string;
  badge?: {
    text: string;
    color: string;
  };
  price: {
    current: number;
    original: number;
    discount?: number;
  };
  title: string;
  reviews: {
    count: number;
    rating: number;
  };
  soldCount: number;
}

export interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];
}

export interface Description {
  outstandingFeatures: string[];
  washingInstructions: string[];
  images: ImageProps[];
}

export interface Review {
  rating: number;
  text: string;
}

export interface ShippingInfo {
  estimatedDelivery: string;
  returnPolicy: string;
}

export interface ProductTabContent {
  description: Description[];
  specifications: string[];
  reviews: Review[];
  shipping: ShippingInfo[];
}

export interface Specification {
  text: string;
}
