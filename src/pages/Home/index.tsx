import { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import { getProductByCategory } from "../../api/product";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";
import WarrantyCard from "../../components/WarrantyCard";

const Home = ({}) => {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCategories().then((res: any) => {
      setCategorys(res.data);
    });
    getProductByCategory(page, limit, 0, "id", "asc").then((res: any) => {
      setProducts(res.data.items);
      setTotal(res.data.itemCount);
    });
  }, [page, limit]);

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
        <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center mb-5">
        <button
          className="outline_btn_layout"
          onClick={() => {
            setLimit(limit + 4);
          }}
          disabled={limit >= total}
        >
          Show More
        </button>
      </section>
      <WarrantyCard />
    </main>
  );
};

export default Home;
