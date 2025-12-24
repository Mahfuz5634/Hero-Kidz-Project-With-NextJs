import React from 'react';
// import products from "../../data/toys.json"
import ProductCard from '../card/ProductCard';
import { getProducts } from '@/actions/server/product';

const Product = async () => {
    const products= (await getProducts()) || [];
    console.log(products);
    return (
        <div>
           <h1 className='text-4xl text-center font-bold mb-10'>Our Products</h1>
           <div className='grid grid-cols-1  md:grid-cols-3 gap-2'>
            {
                products.map(product=><ProductCard  key={product.title} product={product} ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Product;