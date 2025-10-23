import React from "react";

const ProductsCard = ({ product }) => {
  const { pictureURL, toyName, rating, availableQuantity, price } = product;

  console.log(product);
  return (
    <div className="w-96 bg-white rounded-2xl shadow-md overflow-hidden p-4 text-center hover:shadow-lg transition-all">
      {/* Image */}
      <div className="bg-pink-100 rounded-2xl p-2">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-80  object-contain mx-auto mb-3"
        />
      </div>

      {/* Rating */}
      <div className="flex justify-center my-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 ${
              i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
          </svg>
        ))}
      </div>

      {/* Toy name */}
      <h3 className="text-gray-800 font-semibold text-lg mb-1">{toyName}</h3>

      {/* Quantity */}
      <p className="text-gray-500 text-sm mb-2">
        Available Quantity:{" "}
        <span className="font-medium text-gray-700">{availableQuantity}</span>
      </p>

      {/* Price */}
      <p className="text-[#FF8C00] font-bold text-lg mb-3">${price}</p>

      {/* View More button */}
      <button
        className="px-4 py-2 bg-[#8148EB] text-white rounded-lg font-medium shadow hover:bg-[#6a36d3] transition"
        onClick={() => alert(`Viewing more about: ${toyName}`)}
      >
        View More
      </button>
    </div>
  );
};

export default ProductsCard;
