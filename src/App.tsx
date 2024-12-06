import { Header } from "./layout/Header";
import { ProductDetails } from "./components/product";
import { ProductDetails as IProductDetails } from "./types/ProductDetailsType";
import { Footer } from "./components/footer/Footer";
const product: IProductDetails = {
  id: "1",
  name: "Stylish Winter Jacket",
  description:
    "A high-quality winter jacket designed to keep you warm and stylish during the cold months.",
  sku: "WJ123456",
  categories: ["Clothing", "Winter Wear", "Jackets"],
  images: [
    {
      id: "img1",
      src: "https://cdn.pixabay.com/photo/2023/02/22/19/13/reading-7807231_640.jpg",
      alt: "Front view of the winter jacket",
    },
    {
      id: "img1",
      src: "https://cdn.pixabay.com/photo/2023/02/22/19/13/reading-7807231_640.jpg",
      alt: "Front view of the winter jacket",
    },
    {
      id: "img1",
      src: "https://cdn.pixabay.com/photo/2023/02/22/19/13/reading-7807231_640.jpg",
      alt: "Front view of the winter jacket",
    },
    {
      id: "img2",
      src: "https://cdn.pixabay.com/photo/2024/11/07/18/48/sofa-9181557_1280.jpg",
      alt: "Back view of the winter jacket",
    },
    {
      id: "img3",
      src: "https://cdn.pixabay.com/photo/2024/11/07/18/48/sofa-9181557_1280.jpg",
      alt: "Close-up of the fabric",
    },
  ],
  mainImage: {
    id: "img1",
    src: "https://cdn.pixabay.com/photo/2024/11/07/18/48/sofa-9181557_1280.jpg",
    alt: "Front view of the winter jacket",
  },
  pricing: {
    currency: "USD",
    currentPrice: 120,
    originalPrice: 150,
    discount: 20,
  },
  reviews: {
    rating: 4.5,
    totalReviews: 320,
    totalSold: 1500,
  },
  sizes: [
    { value: "S", label: "22", available: true, selected: false },
    { value: "M", label: "24", available: true, selected: false },
    { value: "L", label: "26", available: true, selected: true },
    { value: "XL", label: "28", available: false, selected: false },
  ],
  colors: [
    { value: "black", label: "Black", hex: "#000000", selected: true },
    { value: "blue", label: "Blue", hex: "#0000FF", selected: false },
    { value: "red", label: "Red", hex: "#FF0000", selected: false },
  ],
  stock: {
    status: "LOW_STOCK",
    quantity: 5,
  },
  delivery: {
    estimatedRange: {
      start: "2024-12-06",
      end: "2024-12-10",
    },
    returnPeriod: 30, // in days
  },
  socialShares: [
    {
      platform: "Facebook",
      icon: "/src/assets/facebook.png",
      url: "https://facebook.com/share?product_id=1",
    },
    {
      platform: "Twitter",
      icon: "/src/assets/x.png",
      url: "https://twitter.com/share?product_id=1",
    },
    {
      platform: "Instagram",
      icon: "/src/assets/instagram.png",
      url: "https://instagram.com/share?product_id=1",
    },
    {
      platform: "WhatsApp",
      icon: "/src/assets/whatsapp.png",
      url: "https://whatsapp.com/share?product_id=1",
    },
    {
      platform: "TikTok",
      icon: "/src/assets/tiktok.png",
      url: "https://tiktok.com/share?product_id=1",
    },
  ],
  paymentMethods: [
    {
      provider: "Visa",
      icon: "visa-icon.png",
      id: "visa",
    },
    {
      provider: "MasterCard",
      icon: "mastercard-icon.png",
      id: "mastercard",
    },
    {
      provider: "PayPal",
      icon: "paypal-icon.png",
      id: "paypal",
    },
  ],
};

function App() {
  return (
    <>
      <Header
        onLanguageChange={() => {}}
        onCurrencyChange={() => {}}
        onSearch={() => {}}
        onCategorySelect={() => {}}
        onCartClick={() => {}}
        cartCount={0}
        cartTotal="0"
        currentLanguage="en"
        currentCurrency="USD"
      />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
}

export default App;
