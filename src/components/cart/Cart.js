import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../cartItem/CartItem'

export const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="btn btn-default">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <h3>Total: ${total}</h3>
            <button onClick={ () => clearCart() } className="btn btn-default"></button>
            <Link to="/checkout" className="btn btn-default">Checkout</Link>
        </div>
    )
}
