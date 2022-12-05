import { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import { Footer } from "../../components/Footer/Footer";
import Header from "./Header";
import ProductList from "./ProductList";

const LandingPage = () => {
  const categories = [
    "tops",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "sunglasses",
    "womens-bags",
  ];

  const color_palette = ["#ffe5e0", "#f7bfcc", "#e8b0d3", "#b6b1d8", "#90c9ff"];

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let temp_products = {};

    await Promise.all(
      categories.map(async (category) => {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await response.json();
        temp_products = { ...temp_products, [category]: data.products };
      })
    );
    setProducts(temp_products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative w-screen flex flex-col items-center">
      <Header />
      <div className="bg-white w-full max-w-7xl px-5 py-10 pb-24">
        <ProductList {...{ products, color_palette }} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
