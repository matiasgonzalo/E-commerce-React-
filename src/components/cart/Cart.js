import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../cartItem/CartItem'

export const Cart = () => {

    const { cart, removeItem, clearCart, totalQuantity, total } = useContext(CartContext)

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header)  */}
            <section className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Cart</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </div>
                    </div>
                </div> {/* /.container  */}
            </section>

            {/*  Main content */}
            <section className="content">
                <div className="container">
                    {/*  Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Cart</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{width: "1%"}}>
                                            #
                                        </th>
                                        <th style={{width: "20%"}}>
                                            Product
                                        </th>
                                        <th style={{width: "30%"}}>
                                            Title
                                        </th>
                                        <th>
                                            Description
                                        </th>
                                        <th style={{width: "20%"}}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        totalQuantity === 0 ?
                                            <tr>
                                                <td colSpan={5} className="text-center">
                                                    <h4>No hay items en el carrito</h4>
                                                </td>
                                            </tr>
                                        :
                                            cart.map(p => 
                                                <tr key={p.id}>
                                                    <td>
                                                        #
                                                    </td>
                                                    <td>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" className="table-avatar" src={p.image1} />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <Link to={`/item/${p.id}`}>
                                                            { p.title }
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <small>
                                                            { p.description }
                                                        </small>
                                                    </td>
                                                    <td className="project-actions text-right">
                                                        <Link to={`/item/${p.id}`} className="btn btn-primary btn-sm" href="#javacript">
                                                            <i className="fas fa-eye mr-1">
                                                            </i>
                                                            View
                                                        </Link>
                                                        <a className="btn btn-danger btn-sm" href="#javacript">
                                                            <i className="fas fa-trash mr-1">
                                                            </i>
                                                            Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <h3>Total: ${total}</h3>
                            <div className="margin">
                                <button onClick={ () => clearCart() } className="btn btn-default">Clear Cart</button>
                                <Link to="/checkout" className="btn btn-default">Checkout</Link>
                                <Link to="/" className="btn btn-default">Products</Link>
                            </div>
                        </div>
                    </div>
                    {/* /.card */}
                </div>
            </section>
            {/* /.content */}
        </div>
    )
}
