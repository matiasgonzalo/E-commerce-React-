import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../cartItem/CartItem'

export const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

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
                                        <th style={{width: "15%"}}></th>
                                        <th style={{width: "18%"}}>
                                            Title
                                        </th>
                                        <th style={{width: "30%"}}>
                                            Description
                                        </th>
                                        <th className="text-center">
                                            Quantity
                                        </th>
                                        <th className="text-center">
                                            Price
                                        </th>
                                        <th className="text-center" style={{width: "20%"}}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        totalQuantity === 0 ?
                                            <tr>
                                                <td colSpan={6} className="text-center">
                                                    <h4 className="text-muted">No hay items en el carrito</h4>
                                                </td>
                                            </tr>
                                        :
                                            cart.map(p => <CartItem key={p.id} {...p} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <div className="d-flex justify-content-between">
                                <h6 className="my-auto">Total: <mark>${total()}</mark></h6>
                                <div className="margin">
                                    <div className="d-flex justify-content-between">
                                        {
                                        totalQuantity !== 0 &&
                                            (
                                            <>
                                                <button onClick={ () => clearCart() } className="btn btn-xs btn-outline-danger mr-1">
                                                    <i className="fas fa-broom"></i>
                                                    Clear Cart
                                                </button>
                                                <Link to="/checkout" className="btn btn-xs btn-outline-primary mr-1">
                                                    <i className="fas fa-money-bill-wave"></i>
                                                    Checkout
                                                </Link>
                                            </>
                                            )
                                        }
                                        <Link to="/" className="btn btn-xs btn-outline-default bg-teal">
                                            <i className="fas fa-tag"></i>
                                            Products
                                        </Link>
                                    </div>
                                </div>
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
