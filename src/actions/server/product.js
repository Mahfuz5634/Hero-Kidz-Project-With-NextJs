"use server"

import { dbConnect, collection } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collection.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) return null; 

  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collection.PRODUCTS).findOne(query);
  return product || null;
};

