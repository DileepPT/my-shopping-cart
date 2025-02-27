import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import '../styles/App.css'
import useFetchProduct from "../hooks/useFetchProducts"
import { FOOTER_MSG } from "../constants/constants"

function ProductListScreen() {

  const {getProductList} = useFetchProduct();

  useEffect(() => {
    getProductList();
  }, [])

  return (
    <div className="app">
      <Header title = 'ReactJS Online Shopping' subtitle = 'Enjoy the shopping'></Header>
      <ProductList />
      <Footer msg=''></Footer>
    </div>
  );
}

export default ProductListScreen
