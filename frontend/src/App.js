import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./Screens/HomeScreen.js";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <HomeScreen />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
