import "./App.css";
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  What,
} from "./containers";
function App() {
  return (
    <div className="App">
      <div class="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
