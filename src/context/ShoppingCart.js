import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCart = createContext({});
const initialCartItems = localStorage.getItem("shopping-Cart")
  ? JSON.parse(localStorage.getItem("shopping-Cart"))
  : [];
const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("shopping-Cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.length;
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const incrementItemQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        console.log("+");
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            console.log("++");
            return { ...item, quantity: item.quantity + 1 };
          } else {
            console.log("+++");
            return item;
          }
        });
      }
    });
  };
  const decrementItemQuantity = (id) => {
    // setCartItems(cartItems.map((item) => item.id === id? {...item, quantity: item.quantity + 1 } : item));
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        console.log("-");
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const removeAllItemsFromCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCart.Provider
      value={{
        cartItems,
        getItemsQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItemFromCart,
        cartQuantity,
        removeAllItemsFromCart,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCart);
};
