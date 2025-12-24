
import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const { id } =  await params;
  console.log(id);
  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return <p className="p-10 text-center text-red-500">Product not found!!!!!!</p>;
  }

  const discountedPrice = product.price - (product.price * (product.discount || 0)) / 100;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
      
        <div className="relative w-full md:w-1/2 h-96 bg-gray-100 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>

     
        <div className="flex-1 space-y-5">
      
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.bangla || product.title}
          </h1>

    
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#fc4000]">৳{discountedPrice}</span>
            {product.discount > 0 && (
              <span className="text-gray-400 line-through">৳{product.price}</span>
            )}
          </div>

       
          <div className="flex items-center gap-3 text-sm text-gray-600">
            ⭐ {product.ratings} ({product.reviews} reviews) | {product.sold} sold
          </div>

      
          <p className="text-gray-700 whitespace-pre-line">{product.description}</p>

          {product.qna && product.qna.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Q&A</h2>
              {product.qna.map((q, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">{q.question}</p>
                  <p className="text-gray-700">{q.answer}</p>
                </div>
              ))}
            </div>
          )}

       
          <button className="w-full py-3 bg-[#fc4000] text-white font-semibold rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
