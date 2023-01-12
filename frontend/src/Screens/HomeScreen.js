import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../store/prodcutActions";
function HomeScreen() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(productAction());
    async function fetchProduct() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(data);
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
