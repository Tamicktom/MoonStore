import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "../../../components/ProductCard/ProductCard";

const responsive = {
  0: {
    items: 1,
  },
  480: {
    items: 1,
  },
  1030: {
    items: 2,
  },
  1360: {
    items: 3,
  },
};

const ProductList = ({ products, color_palette }) => {
  return (
    <div className="flex flex-col gap-10">
      {Object.keys(products).map((category, index) => {
        return (
          <div
            className="flex flex-col rounded-xl py-5 font-bold"
            key={index}
            style={{
              backgroundColor: color_palette[index]
                ? color_palette[index]
                : color_palette[index / color_palette.length],
              boxShadow: "inset 0 0 0 0.4rem white",
            }}
          >
            {/* first letter uppercase */}
            <p className="text-2xl mb-4 px-8 py-2 bg-white w-max rounded-r-xl">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>

            <div className="flex w-full">
              <OwlCarousel
                className="owl-theme"
                loop
                dots={false}
                nav={false}
                center
                autoplay={true}
                autoplayTimeout={6000}
                responsive={responsive}
                stagePadding={100}
              >
                {products[category].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </OwlCarousel>
            </div>
          </div>
        );
      })}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ProductList;