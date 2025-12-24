const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>

        {/* Info Skeleton */}
        <div className="flex-1 space-y-5">
          {/* Title */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-16 bg-gray-200 rounded"></div>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>

          {/* Q&A Skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>

          {/* Add to Cart Button */}
          <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
