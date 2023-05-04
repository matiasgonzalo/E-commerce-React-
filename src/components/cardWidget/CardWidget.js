import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CardItemListContainer } from '../cardItemListContainer/CardItemListContainer'

export const CardWidget = () => {

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
                    <CardItemListContainer />
                    <Link to="/cart" className="dropdown-item dropdown-footer">See Cart</Link>
                </div>
            </li>
        </>
    )
}
