import { Header } from "./layout/Header";
import { ProductDetails } from "./components/product";
import { Footer } from "./components/footer/Footer";
import { useProduct } from "./utils/useProduct";

function App() {
  const { product, loading, error } = useProduct();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        No product found
      </div>
    );
  }

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
