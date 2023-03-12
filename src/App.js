import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/pages/Home";
import { Product } from "./components/pages/product";
import { Category } from "./components/pages/Category";
import { AddProducts } from "./components/pages/AddProducts";
import { ProductDetiles } from './components/pages/productDetiles';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-2 sidebar"><Sidebar /></div>
        <div className="col-10">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Product />} />
            <Route path="Category" element={<Category />} />
            <Route path="Products/add" element={<AddProducts />} />
            <Route path="Products/:ID" element={<ProductDetiles />} />
          </Routes>



        </div>
      </div>
    </div>
  );
}

export default App;
