import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Shop from "./components/Shop/Shop.js";
import { useState } from "react/cjs/react.production.min";

function App() {
  // const [products, setProducts] = useState();
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
