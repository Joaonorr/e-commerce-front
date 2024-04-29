import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  id: number;
  name: string;
  image_link: string;
  date_created: string;
  date_updated: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  image_link,
  date_created,
  date_updated,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column gap-2 align-items-center position-relative"
      id="category-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/shop/category/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0 z-2 justify-content-center align-items-center"
        style={{
          display: isHovered ? "flex" : "none",
          background: "rgba(0,0,0,0.7)",
        }}
      ></div>
      <img src={image_link} alt={name} className="rounded" />
      <h3>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h3>
    </div>
  );
};

export default CategoryCard;
