import React, { useEffect, useState } from 'react'
import { stock } from '../../data/stock'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const askProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
                reject("Rejacted")
            }, 2000);
        })
    }

    useEffect(() => {
        setLoading(true)
        askProducts()
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
                                        <div className="overlay-wrapper">
                                            <div className="overlay dark">
                                                <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                                                <div className="text-bold text-white pt-2"> Cargando...</div>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        items.map((item, i) => 
                                            <div key={item.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                                <div className="card bg-light d-flex flex-fill">
                                                    <div className="card-header text-muted border-bottom-0">
                                                        Digital Strategist
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h2 className="lead"><b>{item.description}</b></h2>
                                                                <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                                                                <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                    <li className="small">
                                                                        <span className="fa-li">
                                                                            <i className="fas fa-lg fa-building"></i>
                                                                        </span> Address: Demo Street 123, Demo City 04312, NJ
                                                                    </li>
                                                                    <li className="small">
                                                                        <span className="fa-li">
                                                                            <i className="fas fa-lg fa-phone"></i>
                                                                        </span> Phone #: + 800 - 12 12 23 52
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-5 text-center">
                                                                <img src={item.image} alt={item.description} className="img-circle img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <div className="text-right">
                                                            <a href="#javascript" className="btn btn-sm bg-teal">
                                                                <i className="fas fa-comments"></i>
                                                            </a>
                                                            <a href="#javascript" className="btn btn-sm btn-primary">
                                                                <i className="fas fa-user"></i> View Profile
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        {/** /.card-body */}
                        <div className="card-footer">
                            <nav aria-label="Contacts Page Navigation">
                                <ul className="pagination justify-content-center m-0">
                                <li className="page-item active"><a className="page-link" href="#javascript">1</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">2</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">3</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">4</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">5</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">6</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">7</a></li>
                                <li className="page-item"><a className="page-link" href="#javascript">8</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/** /.card-footer */}
                    </div>
                    {/**  /.card */}
                </section>
                {/** /.content */}
            </div>
        </>
    )
}
