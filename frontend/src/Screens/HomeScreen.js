import React from "react";
import products from "./../product";
import { Row, Col } from "react-bootstrap";
function HomeScreen() {
  let count = 0;
  return (
    <div>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
