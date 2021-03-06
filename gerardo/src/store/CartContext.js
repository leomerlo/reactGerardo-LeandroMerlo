import React, { useState } from 'react';

const CartContext = React.createContext({
    cartList: [],
    addItem: (item,qty) => {},
    removeItem: (id) => {},
    clear: () => {},
    totalItems: () => {}
})

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    
    const addItemHandler = (item, qty) => {
        let newCart;
        if(itemExists(item.id)) {
          newCart = cartList.map((e) => {
            if(e.id === item.id) {
              e.quantity += qty;
            }
            return e;
          })
        } else {
          const newItem = {
            ...item,
            quantity: parseInt(qty)
          }
          
          newCart = [
              ...cartList,
              newItem
          ]
        }
        setCartList(newCart);
      }
    
      const removeItemHandler = (id) => {
        const newCart = cartList.map((e, index) => {
          if(e.id === id){
            cartList.splice(index,1);
          }
          return e;
        });
        setCartList(newCart);
      }
    
      const itemExists = (id) => {
        return cartList.find((e) => e.id === id);
      }
    
      const totalItemsHandler = () => {
        let totalAmmount = 0;
        cartList.map((e) => {
          return totalAmmount += e.quantity
        })
        return totalAmmount;
      }
    
      const clearHandler = () => {
        setCartList([])
      }

    return (
        <CartContext.Provider value={{
            cartList: cartList,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
            clear: clearHandler,
            totalItems: totalItemsHandler
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;