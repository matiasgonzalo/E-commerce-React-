import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItemListContainer = () => {
    const { cart, removeItem } = useContext(CartContext)

    return (
        <>{
            cart.map(product => (
                <div key={product.id}>
                    <div className="dropdown-item">
                        {/** Product Start */}
                        <div className="media">
                            <img src={ product.image1 } alt="Product" className="img-size-50 mr-3 img-circle" />
                            <div className="media-body">
                                <h3 className="dropdown-item-title">
                                    { product.title }
                                    <span className={`float-right text-sm ${product.style}`}>
                                        <i className="fas fa-times" styles={{cursor:"pointer"}} onClick={() => removeItem(product.id)}></i>
                                    </span>
                                </h3>
                                <p className="text-sm">{
                                    (product.description && product.description.length > 15) 
                                        ? product.description.substring(0,15) + '...'
                                        : product.description
                                }</p>
                            </div>
                        </div>
                        {/** Product End */}
                    </div>
                    <div className="dropdown-divider"></div>
                </div>
            ))
        }</>
    )
}
