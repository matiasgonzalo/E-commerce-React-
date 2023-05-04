import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItemListContainer } from '../cartItemListContainer/CartItemListContainer'

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            {/** Cart Dropdown Menu */}
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#javascript">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-danger navbar-badge">{totalQuantity}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <CartItemListContainer />
                    <Link to="/cart" className="dropdown-item dropdown-footer">See Cart</Link>
                </div>
            </li>
        </>
    )
}
