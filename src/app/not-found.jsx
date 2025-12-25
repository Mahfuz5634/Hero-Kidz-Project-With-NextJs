import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-[#fc4000]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you are looking for does not exist or has been removed.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-[#fc4000] text-white rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
