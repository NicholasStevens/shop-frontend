import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components";

function DetailsPage() {
  const [specificProduct, setSpecificProduct] = useState(null);
  const routeParams = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(
        `http://localhost:4000/products/${routeParams.id}`
      );
      setSpecificProduct(res.data);
    }
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  return !specificProduct ? (
    "Loading"
  ) : (
    <div>
      <ProductCard
        title={specificProduct.title}
        rating={specificProduct.rating}
        price={specificProduct.price}
        description={specificProduct.description}
        id={specificProduct.id}
        mainImage={specificProduct.mainImage}
        category={specificProduct.categoryId}
      />
    </div>
  );
}

export { DetailsPage };
