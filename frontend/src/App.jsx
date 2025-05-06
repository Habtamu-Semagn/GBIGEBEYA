import Categories from "../components/categories/categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
