import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import '../styles/App.css'
import useFetchProduct from "../hooks/useFetchProducts"
import { useTranslation } from 'react-i18next'

function ProductListScreen() {

  const {getProductList} = useFetchProduct();
  const {t: translate} = useTranslation();

  useEffect(() => {
    getProductList();
  }, [])

  return (
    <div className="app">
      <Header title = {translate('iAppTitle')} subtitle = {translate('iAppSubtitle')}></Header>
      <ProductList />
      <Footer msg={translate('iAuthor')}></Footer>
    </div>
  );
}

export default ProductListScreen
