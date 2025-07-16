import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "E-Book: Digital Success",
      type: "ebook",
      price: 499,
      image: "/assets/images/ebook.jpg",
    },
    {
      id: 2,
      name: "Online Course",
      type: "course",
      price: 2999,
      image: "/assets/images/course.jpg",
    },
    {
      id: 3,
      name: "Branded T-Shirt",
      type: "merch",
      price: 799,
      image: "/assets/images/tshirt.jpg",
    },
    {
      id: 4,
      name: "1-on-1 Coaching",
      type: "service",
      price: 4999,
      image: "/assets/images/coaching.jpg",
    },
    {
      id: 5,
      name: "Exclusive Workshop",
      type: "course",
      price: 1999,
      image: "/assets/images/workshop.jpg",
    },
    {
      id: 6,
      name: "Phone Case",
      type: "merch",
      price: 399,
      image: "/assets/images/case.jpg",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            My Products & Services
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "ebook", "course", "merch", "service"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {filter === "all" ? "All Products" : filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
