import React from 'react'

const formatPrice = (price) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ name, price, category, inStock, imageUrl }) => {
  const outOfStockStyle = inStock ? '' : 'opacity-50 pointer-events-none';

  return (
    <div
      className={`
        relative 
        bg-white 
        rounded-lg 
        overflow-hidden 
        shadow-lg 
        hover:shadow-xl 
        transform 
        hover:scale-[1.02] 
        transition 
        duration-300 
        ease-in-out
        ${outOfStockStyle}
      [cite_start]`}
    >
      
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      {!inStock && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md z-10">
          สินค้าหมด
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{name}</h3>
        <p className="text-sm text-indigo-500 font-medium">{category} </p>
        <p className="text-2xl font-bold text-green-600">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;