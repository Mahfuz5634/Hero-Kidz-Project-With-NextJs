import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>

        {/* Rating */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded-full w-full"></div>
      </div>
    </div>
    );
};

export default ProductSkeleton;