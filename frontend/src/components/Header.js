import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="white" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">SA Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cart">
                <ShoppingCartIcon />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <AccountCircleIcon />
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
