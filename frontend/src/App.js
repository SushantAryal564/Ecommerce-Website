import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <main className="py-3">My site</main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
