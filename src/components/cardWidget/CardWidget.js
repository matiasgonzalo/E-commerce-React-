import React from 'react'
import { ItemListContainer } from '../itemListContainer/ItemListContainer'
import Prod1Img from './assets/img/prod-1.jpg'
import Prod2Img from './assets/img/prod-2.jpg'
import Prod3Img from './assets/img/prod-3.jpg'

export const CardWidget = () => {

    const greeting = [
        {id: 1, name: 'Product1', img: Prod1Img, style: 'text-danger'}, 
        {id: 2, name: 'Product2', img: Prod2Img, style: 'text-muted'}, 
        {id: 3, name: 'Product3', img: Prod3Img, style: 'text-warning'}
    ]

    return (
        <>
            {/** Cart Dropdown Menu */}
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#javascript">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <ItemListContainer greeting={greeting}/>
                    <a href="#javascript" className="dropdown-item dropdown-footer">See All Products</a>
                </div>
            </li>
        </>
    )
}
