import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const useData = {
            name, phone, email
        }

        onConfirm(useData)
    }

    return (<>
        <div className="content-wrapper">
            {/**  Content Header (Page header) */}
            <section className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <h1>Checkout</h1>
                        </div>
                        <div className="col-sm-8">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to='/cart'>Cart</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    <p className="text-muted d-inline">Checkout</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>{/** container-fluid */}
            </section>
            {/** Main content */}
            <section className="content">
                <div className="container">
                    {/** Default box */}
                    <div className="card card-solid">
                        <div className="card-body pb-0">
                            <div className="mx-sm-0 mx-md-5">
                                <form onSubmit={handleConfirm} id="checkout-form" className="mx-sm-1 mx-md-5">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            className="form-control"
                                            value={name}
                                            onChange={({ target }) => setName(target.value)}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Phone" 
                                            className="form-control"
                                            value={phone}
                                            onChange={({ target }) => setPhone(target.value)}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Email" 
                                            className="form-control"
                                            value={email}
                                            onChange={({ target }) => setEmail(target.value)}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-sm btn-default" to="/cart">
                                Back
                            </Link>
                            <button type='submit' form="checkout-form" className="btn btn-sm btn-primary float-right">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}
