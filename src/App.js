import Header from "./components/Header";
import data from "./data";
import { useState } from "react";
import Note from "./components/Note";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Method from "./components/Method";


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
 
  const onAdd = (product) => {
    const prevItems = cartItems.find((x) => x.id === product.id);
    if (prevItems) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...prevItems, qty: prevItems.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    console.log(cartItems);
  };
  const onRemove = (product) => {
    const prevItems = cartItems.find((x) => x.id === product.id);
    if (prevItems.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...prevItems, qty: prevItems.qty - 1 } : x
        )
      );
    }
  };

  const [shouldDisplay, setShouldDisplay] = useState(false);
  const displayContent = () => {
    setShouldDisplay((prevDisplay) => !prevDisplay);
  };


  const checkout = ()=>{
    const squad = window.payco
    
      const squadInstance = new squad({
        onClose: () => console.log('Widget closed'),
        onLoad: () => console.log('Widget loaded successfully'),
        onSuccess: () => console.log(`Linked successfully`),
        key: 'test_pk_sample-public-key-1',
        email:"test@gmail.com",
        amount:10000,
      });
      squadInstance.setup();
      squadInstance.open();
      
    
  }
  return (
    <div>
      <Header countCartItems={cartItems} />
      <div className="App">
        <div
          style={{ display: shouldDisplay && "none" }}
          className="order-detail"
        >
          <div className="billingAddress">
            <h1>Billing Address</h1>
          </div>
          <Detail />
          <div className="choose">
            <h1>Choose Your Payment Method</h1>
          </div>
          <Method />
          <div className="next" onClick={displayContent}>
            Next
          </div>
        </div>
        <div style={{ display: shouldDisplay && "none" }}>
          <Note />
          <Cart
            onAdd={onAdd}
            onRemove={onRemove}
            products={products}
            cartItems={cartItems}
          />
          <div className="continue" onClick={displayContent}>
            Continue
          </div>
          <div className="checkout" onClick={checkout}>Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default App;
