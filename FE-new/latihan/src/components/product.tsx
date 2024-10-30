import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { productAllFetch } from "../store/product/produkFetch";
import { apiFetch } from "../../utils/api";

const Product = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state: RootState) => state.productAllState
  );
  console.log("Products:", products);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleCategoryChange = (category: string | null) => {
  //   setSelectedCategory(category);
  //   fetchProduct();
  // };

  // const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   fetchProduct();
  // };

 const fetchProduct = () => {
   dispatch(productAllFetch());
 };

// const fetchProduct = () => {
//   dispatch(
//     productAllFetch({
//       category: selectedCategory,
//       searchQuery: searchQuery || "",
//     })
//   );
// };

   useEffect(() => {
     fetchProduct();
   }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
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
  );
};

export default Product;

