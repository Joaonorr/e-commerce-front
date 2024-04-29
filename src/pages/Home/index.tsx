import { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import { getProduct } from "../../api/product";

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

  useEffect(() => {
    console.log(categorys);
    console.log(products);
  }, [categorys, products]);

  return <div>Home</div>;
};

export default Home;
