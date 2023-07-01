import React from "react";
import ProductPopupProps from "../interface/ProductPopUpProps";
import { FiX } from "react-icons/fi";
import '../App.css'

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 mx-4 rounded-lg shadow-xl relative mt-14">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <FiX className="mb-2 text-primary" size={26} />
        </button>

        <h2 className="text-xl font-bold text-center my-4">{product.titulo}</h2>

        <div className="flex justify-center my-4">
          <img
            src={product.imagem}
            alt={product.titulo}
            className="object-contain custom-round w-80 rounded-lg max-h-80"
          />
        </div>

        <p className="my-6 ml-1 text-sm md:text-md lg:text-lg">
          {product.descricao}
        </p>

        <p className="font-barlow text-center font-bold text-lg lg:text-xl">
          {product.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </div>
  );
};

export default ProductPopup;
