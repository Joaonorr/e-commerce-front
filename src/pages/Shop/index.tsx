import { useEffect, useState } from "react";
import { Breadcrumb, Dropdown, Form } from "react-bootstrap";
import { BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { IoOptionsOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../api/category";
import { getProductByCategory } from "../../api/product";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import WarrantyCard from "../../components/WarrantyCard";

const Shop = ({}) => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(16);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("id");
  const category = Number(useParams().id || 0);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((res: any) => {
      setCategorys(res.data);
    });
    getProductByCategory(page, limit, category, sort, order).then(
      (res: any) => {
        setProducts(res.data.items);
        setTotalItems(res.data.itemCount);
      }
    );
  }, [useParams().id, page, limit, order, sort]);

  const paginate = (page: number) => {
    setPage(page);
  };

  return (
    <main>
      <section className="shop_hero d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1>Shop</h1>
          <Breadcrumb>
            <Breadcrumb.Item className="fw-bold">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <section className="shop_filter">
        <div className="d-flex justify-content-between align-items-center w-100 px-5">
          <div className="d-flex justify-content-start align-items-center w-100 ">
            <div className="d-flex gap-5 align-items-center pe-5">
              <Dropdown className="d-flex gap-5" style={{ width: "150px" }}>
                <Dropdown.Toggle className="w-100 bg-transparent border-0 text-dark d-flex justify-content-between align-items-center gap-1 fs-5">
                  <IoOptionsOutline size={32} />
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu className="p-3" style={{ width: "200px" }}>
                  <Form.Check
                    type="radio"
                    label="All"
                    name="category"
                    onClick={() => navigate("/shop")}
                  />
                  {categorys.map((category: any) => (
                    <Form.Check
                      key={category.id}
                      type="radio"
                      label={category.name}
                      name="category"
                      onClick={() => navigate(`/shop/category/${category.id}`)}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <HiViewGrid size={32} />
              <BsViewList size={32} />
            </div>
            <div className="d-flex gap-5 align-items-center border-start border-dark ps-5">
              Showing {page * limit - limit + 1} - {page * limit} of{" "}
              {totalItems} items
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center w-100 gap-5">
            <div className="d-flex justify-content-end align-items-center gap-3">
              Show{" "}
              <Form.Select
                onChange={(e) => setLimit(Number(e.target.value))}
                style={{ width: "100px" }}
              >
                <option>16</option>
                <option>32</option>
                <option>64</option>
              </Form.Select>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-3">
              Short by{" "}
              <Form.Select
                style={{ width: "150px" }}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="id">Default</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="discount">Discount</option>
              </Form.Select>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-3">
              Order by{" "}
              <Form.Select
                style={{ width: "150px" }}
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center p-5 gap-5 flex-wrap w-100">
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
      <section className="d-flex justify-content-center align-items-center w-100 mb-5">
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalItems / limit)}
          onPageChange={paginate}
        />
      </section>
      <WarrantyCard />
    </main>
  );
};

export default Shop;
