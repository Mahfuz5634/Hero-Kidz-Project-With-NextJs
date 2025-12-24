import Banner from "@/component/home/Banner";
import Product from "@/component/home/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Product></Product>
      </section>
    </div>
  );
}
