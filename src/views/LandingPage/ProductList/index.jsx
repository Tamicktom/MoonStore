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
  }
};

const ProductList = ({ products, color_palette }) => {
  return (
    <div className="flex flex-col gap-10">
      {Object.keys(products).map((category, index) => {
        return (
          <div
            className="flex mx-2 flex-col rounded-xl py-2 font-bold border-2 border-white border-solid drop-shadow-lg"
            key={index}
            style={{
              backgroundColor: color_palette[index]
                ? color_palette[index]
                : color_palette[index / color_palette.length],
            }}
          >
            <h2 className="text-2xl mb-4 px-8 py-2 bg-white w-max rounded-r-xl first-letter:uppercase">
              {category}
            </h2>

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
