import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            if (quantity > 0) {
                setCart(prev => [...prev, {...item, quantity}])
                setTotalQuantity(totalQuantity + 1)
            } else {
                console.log('El producto no dispone de Stock')
            }
        } else {
            console.log('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        setTotalQuantity(totalQuantity - 1)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((accumulator, p) => accumulator + (p.price * p.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}
