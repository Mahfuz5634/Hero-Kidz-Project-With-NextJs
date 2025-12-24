import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="relative h-56  w-full bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain p-4"
          fill
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-[#fc4000] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.bangla}
        </h3>

        {/* Rating & Sold */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            ⭐ {product.ratings} ({product.reviews} reviews)
          </span>
          <span>{product.sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#fc4000]">
            ৳{discountedPrice}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="w-full mt-3  py-2.5 bg-[#fc4000] text-white font-semibold rounded-xl hover:bg-orange-400 transition">
          Add to Cart
        </button>
         <Link  href={`/products/${product._id.toString()}`}  className=" btn w-full mt-3  py-2.5 bg-[#dd9077] text-white font-semibold rounded-xl hover:bg-orange-400 transition">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
