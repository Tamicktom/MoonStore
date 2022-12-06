//* Libraries imports
import { useState, useEffect } from 'react';
import { Star, ShareNetwork, Heart, ArchiveBox, ShoppingCart, FileText } from "phosphor-react";
import { useParams } from "react-router-dom";

//* Components imports

export default function ProductView() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    discountPercentage: 0,
    rating: 0,
    images: [""]
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const color_palette = ["#ffe5e0", "#f7bfcc", "#e8b0d3", "#b6b1d8", "#90c9ff"];

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(setProduct);
  }, []);

  //! debug
  useEffect(() => {
    if (product) setLoading(false);
  }, [product]);

  return (
    <div className="flex flex-col items-center w-screen mt-[10rem]">
      <div className="w-full max-w-7xl rounded-3xl">
        {/* mobile */}
        <main className="flex flex-col items-center w-full gap-4 px-4 py-10 bg-white lg:hidden">
          {!loading &&
            (<>
              <ProductName name={product.title} />
              <TopInfo rating={product.rating} />
              <ProductImages images={product.images} />
              <PriceStock price={product.price} stock={product.stock} discount={product.discountPercentage} />
              <Description text={product.description} />
            </>)
          }
        </main>

        {/* desktop */}
        <main className="flex-row items-start hidden w-full h-full p-8 bg-white lg:flex rounded-3xl">
          {!loading &&
            (<>
              <div className='flex flex-col items-center justify-center w-6/12 pr-2'>
                <ProductImages images={product.images} />
              </div>
              <div className='flex flex-col items-center justify-center w-6/12 h-full gap-10 pl-2'>
                <ProductName name={product.title} />
                <TopInfo rating={product.rating} />
                <Description text={product.description} />
                <PriceStock price={product.price} stock={product.stock} discount={product.discountPercentage} />
              </div>
            </>)
          }
        </main>
      </div>
    </div>
  );
}
const ProductName = ({ name }) => {
  return (
    <h1 className="items-center w-full max-w-xl mt-2 text-2xl font-bold text-b-900 lg:mt-0">{name}</h1>
  );
}

const TopInfo = ({ rating }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-xl gap-2">
      <StarRating rating={rating} />
      <ShareLove />
    </div>
  );
}

const Description = ({ text }) => {
  return (
    <div className="flex flex-col items-start w-full max-w-xl gap-2">
      <div className="flex flex-row items-center w-full gap-1">
        <FileText size={20} className="text-b-500" />
        <h3 className="text-xl font-bold text-b-900">Descrição</h3>
      </div>
      <p className="text-base text-b-700">
        {text}
      </p>
    </div>
  );
}

const PriceStock = ({ price, stock, discount }) => {
  const [normalPrice, normalPriceCents] = price.toString().split('.');
  const [discountPrice, discountPriceCents] = (((price - (price * discount / 100)).toFixed(2)).replace('.', ',')).split(',');

  return (
    <div className="flex flex-col items-center w-full max-w-xl gap-2 mt-2">
      <div className="flex flex-row items-center w-full gap-1 mb-2">
        <ArchiveBox size={28} className="text-b-500" />
        <span className="text-xl text-b-700">{stock} Em estoque</span>
      </div>
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col items-start isolate">
          <span className="text-xl sm:text-base text-b-500">De</span>
          <span className="text-b-500 text-lg sm:text-[2.5rem] font-bold">
            R${normalPrice}<span className="text-xs sm:text-xl">,{normalPriceCents || "00"}</span>
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold sm:text-xl text-b-700">Por</span>
          <span className="text-4xl font-bold sm:text-6xl text-b-900">
            R${discountPrice}<span className='text-2xl sm:text-2xl'>,{discountPriceCents || "00"}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <StyledButton
          icon={<ShoppingCart size={32} />}
          text="Adicionar ao carrinho" />
      </div>
    </div>
  );
}

const StyledButton = ({ text, icon }) => {
  return (
    <button className="flex flex-row items-center justify-center w-full gap-4 p-2 mt-2 bg-pink-400 rounded-lg hover:bg-pink-500 drop-shadow-md text-b-700 hover:text-b-500">
      {icon}
      <span className="mt-1 font-bold uppercase sm:text-xl">{text}</span>
    </button>
  );
}

const StarRating = ({ rating }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Star size={32} className="text-b-500" />
      <span className="text-xl text-b-500">{rating}</span>
    </div>
  );
}

const ShareLove = () => {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <ShareNetwork size={32} className="text-b-500" />
      <Heart
        size={32}
        className="text-b-500"
      />
    </div>
  )
}

const ProductImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <div className={`flex items-center justify-center w-full overflow-hidden border-2 border-solid rounded-lg drop-shadow-md border-b-500`} >
        <img className="w-full" src={images[currentImage]} alt="" />
      </div>
      <div className="flex flex-row items-start w-full max-w-xl gap-4">
        {
          images?.map((image, index) => (
            <ImageOption
              key={index}
              image={image}
              index={index}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
            />
          ))
        }
      </div>
    </div>
  );
}

const ImageOption = ({ image, index, currentImage, setCurrentImage }) => {
  return (
    <div
      className={`"flex items-center justify-center w-16 h-16 overflow-hidden border-2 border-solid rounded-lg drop-shadow-md "
        ${index === currentImage ? 'border-b-500' : 'border-gray-200'}`}
      onClick={() => setCurrentImage(index)}
    >
      <img className='w-full' src={image} alt="" />
    </div>
  );
}