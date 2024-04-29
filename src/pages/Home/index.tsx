import { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import { getProduct } from "../../api/product";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";

const Home = ({}) => {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories().then((res: any) => {
      setCategorys(res.data);
    });
    getProduct().then((res: any) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <main>
      <section className="home_hero d-flex justify-content-end align-items-end">
        <div className="home_hero_content d-flex me-5 py-5 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta
          nihil voluptate et excepturi modi dignissimos labore vero eligendi?
          Rerum esse autem, dolores earum quis blanditiis soluta molestias
          necessitatibus. Totam.
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center p-5 flex-column gap-5">
        <h2>Browse The Range</h2>
        <div className="d-flex gap-5">
          {categorys.map((category: any) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center p-5 flex-column gap-5">
        <h2>Our Products</h2>
        <div className="d-flex gap-5 flex-wrap">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
