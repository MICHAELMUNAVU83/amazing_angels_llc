import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Nav from "./pages/Nav/Nav";
import Maps from "./pages/Map";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <About />
      <Services />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
