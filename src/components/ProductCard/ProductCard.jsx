import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, images } = product;
  const cutSize = 25;
  const cutTitle = title.length > cutSize
    ? title.slice(0, cutSize) + "..."
    : title;

  return (
    <Link to={`/product/${id}`} key={id}>
      <div className="flex flex-col lg:w-80 lg:h-[512px] w-40 h-64 rounded-xl bg-white/75 backdrop-blur-md border-2 border-white border-solid my-4"
        style={{
          boxShadow: '0 0 0 0.35rem white'
        }}
      >
        <div className="h-full flex items-start overflow-hidden rounded-lg">
          <img
            className="object-cover h-full"
            src={images[0]}
            alt={title}
          />
        </div>
        <div className="h-28 lg:h-32 w-full flex flex-col items-end p-2">
          <div className="flex items-start w-full h-full">
            <p className="text-b-900 text-xs lg:text-lg uppercase leading-4 font-bold">{cutTitle}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full h-full">
            <div className="w-full flex flex-col items-start h-full">
              <span className="leading-3 text-b-500 text-xs">preço</span>
              <p className="text-b-900 text-xl lg:text-3xl">
                R$ {price}<span className="text-[0.65rem] lg:text-base">,00</span>
              </p>
            </div>
            <div className="flex justify-center items-center h-full">
              <button className="p-1 lg:p-2 bg-pink-400 rounded-lg text-b-900">
                <ShoppingCart size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
