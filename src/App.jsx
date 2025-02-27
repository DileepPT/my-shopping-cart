import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductListScreen from "./pages/ProductListScreen";
import ProductDetailsScreen from "./pages/ProductDetailsScreen";
import { ProductProvider } from './contexts/ProductsContext.jsx'

function App() {

  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListScreen />}></Route>
          <Route path="/details/:id" element={<ProductDetailsScreen />}></Route>
        </Routes>
      </Router>
    </ProductProvider>

  );
}

export default App
