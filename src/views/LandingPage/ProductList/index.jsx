//* Libraries imports
import OwlCarousel from "react-owl-carousel";

//* Components Imports
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
            className="flex mx-2 flex-col rounded-xl py-2 font-bold border-2 border-white border-solid drop-shadow-lg"
            key={index}
            style={{
              backgroundColor: color_palette[index]
                ? color_palette[index]
                : color_palette[index / color_palette.length],
            }}
          >
            {/* first letter uppercase */}
            <p className="text-2xl mb-4 px-8 py-2 bg-white w-max rounded-r-xl first-letter:uppercase">
              {category}
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
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ProductList;
