//* Libraries imports
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//* Components Imports
import ProductCard from "../../../components/ProductCard/ProductCard";

const responsive = {
  0: {
    items: 1,
  },
  580: {
    items: 2,
  },
  740: {
    items: 3,
  },
  900: {
    items: 4,
  },
  1030: {
    items: 2,
  },
  1360: {
    items: 3,
  },
};

const landing_page_style = [
  "flex",
  "flex-col",
  "rounded-xl",
  "py-5",
  "font-bold",
];

const ProductList = ({ products, color_palette, category_param }) => {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      {Object.keys(products).map((category, index) => {
        if (category_param && category_param !== category) return null;
        return (
          <div
            className={landing_page_style.join(" ")}
            key={index}
            style={{
              backgroundColor: color_palette[index]
                ? color_palette[index]
                : color_palette[index / color_palette.length],
              boxShadow: "inset 0 0 0 0.4rem white",
            }}
          >
            {/* first letter uppercase */}
            <p className="text-2xl mb-[0.25rem] px-8 py-2 bg-white w-full text-center rounded-r-xl">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>

            <div className="flex w-full">
              <OwlCarousel
                className="owl-theme"
                loop
                dots={false}
                nav={false}
                center
                // autoplay={true}
                // autoplayTimeout={6000}
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
    </div>
  );
};

export default ProductList;
