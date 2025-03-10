import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductListScreen from "./pages/ProductListScreen";
import ProductDetailsScreen from "./pages/ProductDetailsScreen";
import { ProductProvider } from './contexts/ProductsContext.jsx';
import ProductCartScreen from "./pages/ProductCartScreen.jsx";
import CartStore from "./redux/stores/cartStore.js";
import './styles/Common.css'
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={CartStore}>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProductListScreen />}></Route>
            <Route path="/details/:id" element={<ProductDetailsScreen />}></Route>
            <Route path="/cart" element={<ProductCartScreen />}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </Provider>
  );
}

export default App
