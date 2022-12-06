//* Libraries imports
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//* Components Imports
import ProductCard from "../../../components/ProductCard/ProductCard";

const responsive = {
  0: {
    items: 2,
  },
  500: {
    items: 3,
  },
  1000: {
    items: 4,
  }
};

const landing_page_style = [
  "flex",
  "flex-col",
  "rounded-xl",
  "py-5",
  "font-bold",
];

const ProductList = ({ products, color_palette }) => {
  return (
    <div className="flex flex-col gap-10">
      {Object.keys(products).map((category, index) => {
        return (
          <div
            className={landing_page_style.join(" ")}
            key={index}
            style={{
              backgroundColor: color_palette[index]
                ? color_palette[index]
                : color_palette[index / color_palette.length],
            }}
          >
            {/* first letter uppercase */}
            <p className="text-2xl mb-[0.85rem] px-8 py-2 bg-white w-max rounded-r-xl">
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
                stagePadding={0}
                cellPadding={0}
                margin={0}
                lazyLoad={true}
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
