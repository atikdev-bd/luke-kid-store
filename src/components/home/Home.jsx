// import React, { use } from "react";
import { use } from "react";
import ProductsCard from "../productsCard/ProductsCard";
import CustomerHelp from "../CustomerHelp/CustomerHelp";
import OurVision from "../ourVision/OurVison";

const data = fetch("/public/Data/data.json").then((res) => res.json());

console.log(data);

const Home = () => {
  const useData = use(data);
  console.log(useData);
  return (
    <>
      <div className="max-w-11/12 mx-auto mt-14">
        <h1 className="text-4xl text-pink-400 text-center font-bold mt-20 mb-10 ">
          Our Popular Toys
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          {useData.map((product) => (
            <ProductsCard key={product.id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold text-amber-500 mb-12  mt-32">
          Our Customer Support
        </h2>
        <div>
          <CustomerHelp></CustomerHelp>
        </div>
        <div>
          <OurVision></OurVision>
        </div>
      </div>
    </>
  );
};

export default Home;
