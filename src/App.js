import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Shop from "./components/Shop/Shop.js";
// import { useState } from "react/cjs/react.production.min";
import Questions from "./components/Questions/Questions.js";

function App() {
  // const [products, setProducts] = useState();
  return (
    <div>
      <Header />
      <Shop />
      <Questions />
    </div>
  );
}

export default App;
