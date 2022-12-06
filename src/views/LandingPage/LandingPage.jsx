import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
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
  const { category_param } = useParams();

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
    <div className="w-full max-w-7xl rounded-3xl mt-[10rem] mx-auto">
      <ProductList {...{ products, color_palette, category_param }} />
    </div>
  );
};

export default LandingPage;
