import React, { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className="btn-group">
                <button type="button" className="btn btn-default" onClick={ decrement }>-</button>
                <h4 className="mx-2 my-auto">{ quantity }</h4>
                <button type="button" className="btn btn-default mr-1" onClick={ increment }>+</button>
                <div className="btn btn-primary btn-lg btn-flat" onClick={ () => onAdd(quantity)} disabled={!stock}>
                    <i className="fas fa-cart-plus fa-lg mr-2"></i>
                    Add to Cart
                </div>
            </div>
        </>
    )
}
