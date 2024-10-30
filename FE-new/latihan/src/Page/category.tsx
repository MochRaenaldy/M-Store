import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { apiFetch } from "../../utils/api";

export default function category() {
  const [products, setProducts] = useState<object[]>([]);
  const { category } = useParams();
  const location = useLocation();

  async function getProducts() {
    const x: { data: object[] } = await apiFetch.get(
      `/product/category/${category}`
    );
    console.log("asdks", x.data);
    setProducts([...x.data]);
  }

  useEffect(() => {
    getProducts();
  }, [location]);

  useMemo(() => {
    console.log("products", products);
  }, [products]);

  return (
    <>
      {products.length === 0 ? (
        <h2>no products here!</h2>
      ) : (
       <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}>
      {products?.length > 0 &&
        products?.map((product: any) => (
          <Link style={{ textDecoration: "none" }} to={`/detail/${product.id}`}>
            <div
              className="card"
              style={{ width: "18rem", textAlign: "center" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black" }}>
                  {product.name}
                </h5>
                <p className="card-text " style={{ color: "black" }}>
                  {product.desc}
                </p>
                <p className="card-text " style={{ color: "black" }}>
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
      )}
    </>
  );
}
