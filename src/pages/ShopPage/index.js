import { ProductCard } from "../../components";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

// function price_low_to_high(product_a, product_b) {
//   return product_a.price - product_b.price;
// }

// function rating_high_to_low(product_a, product_b) {
//   return product_b.rating - product_a.rating;
// }

function ShopPage() {
  const [productList, setProductList] = useState([]);
  //const [sort_by, set_sort_by] = useState("rating");

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("http://localhost:4000/products");
      console.log(res.data);
      setProductList(res.data);
    }
    getProducts();
  }, []);

  //const products_sorted = [...productList].sort(
  //  sort_by === "price" ? price_low_to_high : rating_high_to_low
  //);

  //const change_sorting = (event) => {
  //  set_sort_by(event.target.value);
  //};

  return (
    <div className="shop_container">
      <div className="filter_display">
        <p>Filter options</p>
      </div>
      <div className="products_display">
        {!productList
          ? "LOADING"
          : productList.map((product) => {
              const {
                title,
                price,
                mainImage,
                description,
                id,
                rating,
                category,
              } = product;
              return (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  mainImage={mainImage}
                  rating={rating}
                  price={price}
                  category={category}
                />
              );
            })}
      </div>
    </div>
  );
}

export { ShopPage };
