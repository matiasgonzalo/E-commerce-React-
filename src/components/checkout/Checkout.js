import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import { CheckoutForm } from '../checkoutForm/CheckoutForm'

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)

                clearCart()
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
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
                                <div className="m-auto text-center">
                                    <h3>The order is generating...</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    if (orderId) {
        return (
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
                                <div className="m-auto text-center">
                                    <h3>Your order ID is: { orderId }</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div>
            <CheckoutForm onConfirm={ createOrder } />
        </div>
    )
}

export default Checkout