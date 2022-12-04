//* Libraries imports
import { useState, useEffect } from 'react';
import { Star, ShareNetwork, Heart, ArchiveBox, ShoppingCart, FileText } from "phosphor-react";

//* Components imports
import { Footer } from "../../components/Footer/Footer";

export default function ProductView() {
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="w-full max-w-7xl min-h-screen pt-[72px] pb-10 mb-10">
        <main className="flex flex-col items-center w-full gap-4 px-4 bg-white">
          <h1 className="items-center w-full max-w-xl mt-2 text-2xl font-bold text-b-900">Nome do produto, Nome do produto, Nome do produto</h1>
          <div className="flex flex-row items-center justify-between w-full max-w-xl gap-2">
            <StarRating rating={4.5} />
            <ShareLove />
          </div>
          <ProductImages />
          <PriceStock price={300.99} stock={99} />
          <Description />
        </main>
      </div>
      <Footer />
    </div>
  );
}

const Description = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-xl gap-2">
      <div className="flex flex-row items-center w-full gap-1">
        <FileText size={20} className="text-b-500" />
        <h3 className="text-xl font-bold text-b-900">Descrição</h3>
      </div>
      <p className="text-base text-b-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur veritatis perspiciatis dolorum, explicabo aliquid ipsam quia unde corporis placeat accusantium, itaque delectus nisi natus maiores et ex molestiae eum quod?</p>
    </div>
  );
}

const PriceStock = ({ price, stock, discount }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl gap-2 mt-2">
      <div className="flex flex-row items-center w-full gap-1 mb-2">
        <ArchiveBox size={28} className="text-b-500" />
        <span className="text-xl text-b-700">{stock} Em estoque</span>
      </div>
      <div className="flex flex-row items-start justify-between w-full">
        <div className="flex flex-col items-start isolate">
          <span className="text-base text-b-500">De</span>
          <span className="text-b-500 text-[2.5rem] font-bold">
            R$XXX<span className="text-xl">,XX</span>
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xl font-bold text-b-700">Por</span>
          <span className="text-6xl font-bold text-b-900">R$XXX<span>,XX</span></span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <StyledButton
          icon={<ShoppingCart size={32} className="text-b-700" />}
          text="Adicionar ao carrinho" />
      </div>
    </div>
  );
}

const StyledButton = ({ text, icon }) => {
  return (
    <button className="flex flex-row items-center justify-center w-full gap-4 p-2 bg-pink-400 rounded-lg drop-shadow-md">
      {icon}
      <span className="mt-1 text-xl font-bold uppercase text-b-700">{text}</span>
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
      <Heart size={32} className="text-b-500" />
    </div>
  )
}

const ProductImages = () => {
  const loremImage = "https://picsum.photos/200";
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <div className="flex items-center justify-center w-full max-w-xl overflow-hidden border-2 border-gray-200 border-solid rounded-lg drop-shadow-md">
        <img className="w-full" src={loremImage} alt="" />
      </div>
      <div className="flex flex-row items-start w-full max-w-xl gap-4">
        <ImageOption image={loremImage} />
        <ImageOption image={loremImage} />
        <ImageOption image={loremImage} />
        <ImageOption image={loremImage} />
      </div>
    </div>
  );
}

const ImageOption = ({ image }) => {
  return (
    <div className="flex items-center justify-center w-16 h-16 overflow-hidden border-2 border-gray-200 border-solid rounded-lg drop-shadow-md">
      <img src={image} alt="" />
    </div>
  );
}