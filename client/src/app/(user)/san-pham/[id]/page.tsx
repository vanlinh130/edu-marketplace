"use client";

import { useParams } from "next/navigation";
import React from "react";

const Products = () => {
  const params = useParams();
  const id = params?.id;

  return <div>SanPham ID: {id}</div>;
};

export default Products;
