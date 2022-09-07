import "./styles.css";
import { RatingStar } from "rating-star";
import { AiOutlineShoppingCart, AiOutlineZoomIn } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function ProductCard(props) {
  const { title, price, description, mainImage, rating, id } = props;

  return (
    <>
      <div key={id} className="product_container">
        <div className="product_image">
          <img src={mainImage} alt="product"></img>
        </div>
        <div className="product_info">
          <h3 className="product_title">{title}</h3>
          <div className="price_rating">
            <p className="product_price">${price}</p>
            <RatingStar maxScore={5} id={id} rating={rating} />
          </div>
          <p className="product_description">{description}</p>
          <div className="product_icons">
            <AiOutlineShoppingCart />
            <AiOutlineZoomIn />
            <MdOutlineFavoriteBorder />
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
