import { useEffect, useState } from "react";
import { Form, Nav, Tab } from "react-bootstrap";
import { BsPlus, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getCategoryById } from "../../api/category";
import { getProductByCategory, getProductById } from "../../api/product";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  const id = Number(useParams().id);
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    sku: "",
    categoryId: 0,
    description: "",
    large_description: "",
    price: 0,
    discount_price: 0,
    discount_percent: 0,
    is_new: false,
    image_link: "",
    other_image_links: "",
  });
  const [category, setCategory] = useState({
    id: 0,
    name: "",
    image_link: "",
    date_created: "",
    date_updated: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    getProductById(id).then((res: any) => {
      setProduct(res.data);
    });
    getCategoryById(product.categoryId).then((res: any) => {
      setCategory(res.data);
    });
    getProductByCategory(page, limit, product.categoryId, "id", "desc").then(
      (res: any) => {
        setProducts(res.data.items);
        setTotalItems(res.data.itemCount);
      }
    );
  }, [useParams().id, product.categoryId, limit]);

  return (
    <main>
      <section className="product_filter d-flex align-items-center px-5 gap-2">
        <h3 className="d-flex align-items-center gap-2">
          <Link to="/">Home</Link>
          {">"}
        </h3>
        <h3 className="d-flex align-items-center gap-2">
          <Link to="/shop">Shop</Link>
          {">"}
        </h3>
        <h3 className=" border-start border-dark ps-3">{product.name}</h3>
      </section>
      <section className="product_details d-flex gap-5 py-5">
        <div className="d-flex gap-5 w-50 justify-content-center align-items-center ">
          <div className="d-flex flex-column gap-4 align-items-end w-25 justify-content-between h-100">
            <img
              src={product.other_image_links}
              alt={product.name}
              className="w-50 rounded-1"
            />
            <img
              src={product.other_image_links}
              alt={product.name}
              className="w-50 rounded-1"
            />
            <img
              src={product.other_image_links}
              alt={product.name}
              className="w-50 rounded-1"
            />
          </div>
          <img
            src={product.image_link}
            alt={product.name}
            className="h-100 rounded-1"
          />
        </div>
        <div className="d-flex flex-column gap-4 px-5 w-50">
          <h4>{product.name}</h4>
          <div className="d-flex gap-4 align-items-center">
            {product.discount_percent > 0 && (
              <>
                <p className="fs-5 ">
                  R$
                  {product.discount_price
                    .toFixed(2)
                    .replace(".", ",")
                    .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
                </p>
                <p className="text-secondary text-decoration-line-through fs-6">
                  R$
                  {product.price
                    .toFixed(2)
                    .replace(".", ",")
                    .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
                </p>
              </>
            )}
            {product.discount_percent === 0 && (
              <p className="fs-5">
                R$
                {product.price
                  .toFixed(2)
                  .replace(".", ",")
                  .replace(/(\d)(?=(\d{3})+,)/g, "$1.")}
              </p>
            )}
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="d-flex gap-3">
              <BsStarFill size={24} fill="#FFD700" />
              <BsStarFill size={24} fill="#FFD700" />
              <BsStarFill size={24} fill="#FFD700" />
              <BsStarFill size={24} fill="#FFD700" />
              <BsStarHalf size={24} fill="#FFD700" />
            </div>
            <p className="border-start border-dark ps-3">5 Customer Reviews</p>
          </div>
          <p>{product.description}</p>
          <p>Size</p>
          <div className="d-flex gap-3">
            <button className="size_btn_layout" disabled>
              XS
            </button>
            <button className="size_btn_layout">S</button>
            <button className="size_btn_layout">M</button>
            <button className="size_btn_layout">L</button>
            <button className="size_btn_layout">XL</button>
          </div>
          <p>Color</p>
          <div className="d-flex gap-3">
            <button
              className="color_btn_layout"
              style={{ backgroundColor: "black" }}
            ></button>
            <button
              className="color_btn_layout"
              style={{ backgroundColor: "white" }}
            ></button>
            <button
              className="color_btn_layout"
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              className="color_btn_layout"
              style={{ backgroundColor: "red" }}
              disabled
            ></button>
          </div>
          <div className="d-flex gap-3">
            <Form.Control
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-25"
            />
            <button className="outline_btn_layout_black">Add to Cart</button>
            <button className="outline_btn_layout_black">
              <BsPlus size={24} /> Compare
            </button>
          </div>

          <hr />

          <div className="d-flex gap-4 align-items-center">
            <p className="text-secondary">SKU: {product.sku}</p>
            <p className="text-secondary">Category: {category?.name}</p>
            <p className="text-secondary">Tags: Tag1, Tag2, Tag3</p>
          </div>

          <div className="d-flex gap-4 align-items-center">
            <p className="text-secondary">Share:</p>
            <div className="d-flex gap-3">
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <Tab.Container defaultActiveKey="description">
          <Nav className="d-flex text-center justify-content-center">
            <Nav.Item className="w-50">
              <Nav.Link eventKey="description" className="text-dark">
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="w-50">
              <Nav.Link eventKey="info" className="text-dark">
                Additional Information
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="px-5">
            <Tab.Pane eventKey="description" className="p-5">
              <p>{product.large_description}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="info" className="p-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui
                aperiam. Eius cum vitae atque fuga quis, cumque nobis velit
                voluptatum accusamus ea necessitatibus? Optio sunt similique
                necessitatibus non autem!
              </p>
              <p>Weight: 1 kg</p>
              <p>Dimensions: 10 x 10 x 10 cm</p>
              <p>Color: Black, White, Blue</p>
              <p>Size: XS, S, M, L, XL</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </section>
      <section className="px-5 py-4 d-flex gap-3 justify-content-between align-items-center flex-column">
        <h3 className="px-5 py-4">Related Products</h3>
        <div className="d-flex justify-content-between align-items-center p-5 gap-5 flex-wrap w-100">
          {products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <button
          className="outline_btn_layout"
          onClick={() => {
            setLimit(limit + 4);
          }}
          disabled={limit >= totalItems}
        >
          Show More
        </button>
      </section>
      <hr />
    </main>
  );
};

export default Product;
