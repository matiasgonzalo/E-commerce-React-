import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { getProducts } from '../../asyncMock'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then(resp => {
                setItems(resp)
            })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
    }, [])

    return (
        <>
            <div className="container">
                {/**  Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Products</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#javascript">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Products</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/** container-fluid */}
                </section>
                {/** Main content */}
                <section className="content">
                    {/** Default box */}
                    <div className="card card-solid">
                        <div className="card-body pb-0">
                            <div className="row">
                                { loading ?
                                    (
                                        <div className="overlay-wrapper" style={{minHeight:"70px"}}>
                                            <div className="overlay dark">
                                                <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                                                <div className="text-bold text-white pt-2"> </div>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        items.map((item, i) => 
                                            <div key={item.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                                <ItemDetail item={item}/>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                        {/** /.card-body */}
                    </div>
                    {/**  /.card */}
                </section>
                {/** /.content */}
            </div>
        </>
    )
}
