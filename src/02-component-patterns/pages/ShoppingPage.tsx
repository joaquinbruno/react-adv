
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import { useShoppingcart } from "../hooks/useShoppingcart";
import { products } from "../data/product";





export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingcart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/*Propiedades propias del componente*/}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={shoppingCart[product.id]?.count || 0}
            
          >
            <ProductImage className="custom-image" />
            <ProductTitle
              className="text-white text-bold"
              activeClass="active"
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map( ([key, product ]) => (
          <ProductCard
          key={key}
          product={product}
          className="bg-dark text-white"
          style={{width: '100px'}}
          onChange={ onProductCountChange }
          value={product.count}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" style={{display: 'flex', justifyContent: 'center' }} />
        </ProductCard>
          ))
        }
        

      

        
      </div>

    </div>
  );
};
