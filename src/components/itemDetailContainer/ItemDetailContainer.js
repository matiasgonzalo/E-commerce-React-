import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock'
import { ItemDetail } from '../itemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(resp => {
                setProduct(resp)
            })
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [itemId])

    return (<>
                <div className="content-wrapper">
                    {/**  Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Product</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link to='/'>Products</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <Link to='/' className="text-muted">Product</Link>
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
                                    { loading ? 
                                        <div className="overlay-wrapper" style={{minHeight:"70px"}}>
                                            <div className="overlay dark">
                                                <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                                                <div className="text-bold text-white pt-2"> </div>
                                            </div>
                                        </div>
                                        :
                                        <ItemDetail product={ product }/>
                                    }
                                </div>
                                <div className="card-footer">
                                    <div className="text-left">
                                        <Link className="btn btn-sm btn-default" to="/">
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
    )
}
