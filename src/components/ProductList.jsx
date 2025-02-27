import '../styles/Products.css'
import { FixedSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader';
import useFetchProduct from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

function ProductList() {

    const {products, hasMoreContent, loadMoreProducts} = useFetchProduct();

    // const rowItem = ({ index, style }) => (
    //     <ProductItem products={products} index={index} style={style}></ProductItem>
    // );

    const renderRowItem = ({index,style})=>{
        return <ProductItem index={index} style={style}></ProductItem>
    }

    const itemCount =  hasMoreContent ? products.length + 1 : products.length;

    const infiniteLoaderContent = ({ onItemsRendered, ref }) => (
        <FixedSizeList
            className ='infinite-list'
            height={500}
            width={500}
            itemCount={itemCount}
            itemSize={210}
            onItemsRendered={onItemsRendered}
            itemData={products}
            ref={ref}>
            {renderRowItem}
        </FixedSizeList>
    );

    return (
        <InfiniteLoader
            isItemLoaded={index => index < products.length}
            itemCount={itemCount}
            loadMoreItems={loadMoreProducts}>
            {infiniteLoaderContent}
        </InfiniteLoader>
    )
}

export default ProductList;
