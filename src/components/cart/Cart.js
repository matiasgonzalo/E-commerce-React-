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
                                        <th style={{width: "1%"}}>
                                            #
                                        </th>
                                        <th style={{width: "20%"}}>
                                            Project Name
                                        </th>
                                        <th style={{width: "30%"}}>
                                            Team Members
                                        </th>
                                        <th>
                                            Project Progress
                                        </th>
                                        <th style={{width: "8%"}} className="text-center">
                                            Status
                                        </th>
                                        <th style={{width: "20%"}}>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        totalQuantity === 0 ?
                                            <tr>
                                                <td colSpan={6} className="text-center">
                                                    <h4>No hay items en el carrito</h4>
                                                </td>
                                            </tr>
                                        :
                                            cart.map(p => 
                                                <tr key={p.if}>
                                                    <td>
                                                        #
                                                    </td>
                                                    <td>
                                                        <a href="#javascript">
                                                            AdminLTE v3
                                                        </a>
                                                        <br/>
                                                        <small>
                                                            Created 01.01.2019
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar4.png" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="project_progress">
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}>
                                                            </div>
                                                        </div>
                                                        <small>
                                                            57% Complete
                                                        </small>
                                                    </td>
                                                    <td className="project-state">
                                                        <span className="badge badge-success">Success</span>
                                                    </td>
                                                    <td className="project-actions text-right">
                                                        <a className="btn btn-primary btn-sm" href="#javacript">
                                                            <i className="fas fa-folder">
                                                            </i>
                                                            View
                                                        </a>
                                                        <a className="btn btn-info btn-sm" href="#javacript">
                                                            <i className="fas fa-pencil-alt">
                                                            </i>
                                                            Edit
                                                        </a>
                                                        <a className="btn btn-danger btn-sm" href="#javacript">
                                                            <i className="fas fa-trash">
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
