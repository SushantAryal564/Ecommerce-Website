import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../store/prodcutActions";
function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction());
  }, []);
  const products = useSelector((state) => {
    return state.product;
  });

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
