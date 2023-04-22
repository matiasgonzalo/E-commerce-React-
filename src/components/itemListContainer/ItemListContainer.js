import React, { useEffect, useState } from 'react'
import { Item } from '../item/Item'
import { getProducts, getProductsByCategoryId } from '../../asyncMock'
import { Link, useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategoryId : getProducts
        setLoading(true)
        asyncFunction(categoryId)
            .then(resp => {
                setItems(resp)
            })
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [categoryId])

    return (
        <>
            <div className="content-wrapper">
                {/**  Content Header (Page header) */}
                <section className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>{ greeting }</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">{ greeting }</li>
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
                                                    <Item item={item}/>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                            {/** /.card-body */}
                        </div>
                        {/**  /.card */}
                    </div>
                </section>
                {/** /.content */}
            </div>
        </>
    )
}
