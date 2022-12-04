import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, images } = product;

  return (
    <Link to={`/product/${id}`} key={id}>
      <div className="flex flex-col w-[20rem] p-5 rounded-xl bg-white">
        <img
          className="w-[15rem] h-[15rem] object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        <h3 className="text-black text-center text-lg mt-4">{title}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
