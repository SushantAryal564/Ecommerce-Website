import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./Screens/HomeScreen.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen.js";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
