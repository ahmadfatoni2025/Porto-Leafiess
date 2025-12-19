import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <main className="relative">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <Gallery />
      <About />
      <div id="product">
        <Product />
      </div>
      <FAQ />
    </main>
  );
}

export default App
