import { IoHeartOutline } from "react-icons/io5";
import image from "../../assets/products/p1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useCalculateDiscount from "../../hooks/useCalculateDiscount";
import Star from "./Star";
import { Link } from "react-router-dom";

const ProductCard = ({ itemData }) => {
  return (
    <div className="w-full">
      <Link className="w-full" to={`/productdetails/${itemData.id}`}>
        <div className="bg-white shadow-md rounded-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl">
          {/* Top Badges */}
          <div className="p-3 relative">
            <div className="flex items-start justify-between">
              {itemData.discountPercentage && (
                <span className="px-2 py-1 text-xs font-medium rounded bg-red-600 text-white">
                  -{itemData.discountPercentage}%
                </span>
              )}
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-xl text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300">
                <IoHeartOutline />
              </span>
            </div>

            {/* Product Image */}
            <div className="flex justify-center mt-4 relative">
              <img
                src={itemData?.thumbnail || image}
                alt={itemData?.title || "Product"}
                className="w-40 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-white text-xl text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300">
                <MdOutlineRemoveRedEye />
              </span>
            </div>

            {/* Add To Cart Hover Button */}
            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full h-10 flex items-center justify-center bg-black text-white text-sm font-medium transition-opacity duration-300 cursor-pointer">
              <h3>Add To Cart</h3>
            </div>
          </div>

          {/* Product Details */}
          <div className="px-3 pb-4">
            <h2 className="text-base font-semibold text-gray-800 truncate">
              {itemData?.title || "HAVIT HV-G92 Gamepad"}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-600 font-semibold text-base">
                $
                {useCalculateDiscount(
                  itemData?.price,
                  itemData?.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="text-gray-500 line-through text-sm">
                ${itemData?.price?.toFixed(2) || "0.00"}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <Star rating={itemData?.rating} />
              <span className="text-sm text-gray-500">
                ({itemData?.reviews?.length || 0})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
