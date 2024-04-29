import { useState } from "react";
import { TbArrowsLeftRight, TbHeart, TbShare } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_link: string;
  other_image_links: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  sku,
  category_id,
  description,
  large_description,
  price,
  discount_price,
  discount_percent,
  is_new,
  image_link,
  other_image_links,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column gap-2 bg-light position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0 z-2 justify-content-center align-items-center"
        style={{
          display: isHovered ? "flex" : "none",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="d-flex justify-content-center align-items-center gap-4 p-2 flex-column">
          <button
            className="btn btn-outline-warning bg-white border-0 rounded-0 px-5 py-2 font-weight-bold"
            onClick={() => navigate(`/product/${id}`)}
          >
            See Details
          </button>
          <div className="d-flex gap-2">
            <button className="bg-transparent border-0 text-white gap-1 d-flex align-items-center">
              <TbShare className="text-white" stroke="white" />
              Share
            </button>
            <button className="bg-transparent border-0 text-white gap-1 d-flex align-items-center">
              <TbArrowsLeftRight className="text-white" stroke="white" />
              Compare
            </button>
            <button className="bg-transparent border-0 text-white gap-1 d-flex align-items-center">
              <TbHeart className="text-white" stroke="white" />
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {is_new && <span className="new_badge">New</span>}
      {discount_percent > 0 && (
        <span className="discount_badge">-{discount_percent}%</span>
      )}
      <img src={image_link} alt={name} />
      <div className="d-flex flex-column gap-2 p-2">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h3>
        <p className="text-secondary">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          {discount_percent > 0 && (
            <>
              <p className="fs-5 ">
                R$
                {discount_price
                  .toFixed(2)
                  .replace(".", ",")
                  .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
              </p>
              <p className="text-secondary text-decoration-line-through fs-6">
                R$
                {price
                  .toFixed(2)
                  .replace(".", ",")
                  .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
              </p>
            </>
          )}
          {discount_percent === 0 && (
            // Mask to money format 0.000.000,00
            <p className="fs-5">
              R$
              {price
                .toFixed(2)
                .replace(".", ",")
                .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
