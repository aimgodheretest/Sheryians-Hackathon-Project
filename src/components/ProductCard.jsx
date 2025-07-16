import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          {product.type.toUpperCase()}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">
            ₹{product.price}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
