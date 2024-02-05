import { useContext } from "react";
import { ShopContext } from "../Context/ShopContex";
import { useParams } from "react-router";
import Breadcrumbs from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProduct/RelatedProducts";

function Product() {
  const { products, openBurger } = useContext(ShopContext);
  const { productId } = useParams();

  const product = products.find((item) => item.id === +productId);
  const relatedProducts = products.filter((item) => item.category === product.category).slice(0, 4);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className={`product-page ${openBurger ? "open-mobile-menu" : ""}`}>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts product={relatedProducts}/>
    </div>
  );
}

export default Product;
