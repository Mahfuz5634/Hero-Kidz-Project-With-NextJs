export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#fc4000] border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium text-lg">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
