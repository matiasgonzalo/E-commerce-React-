import React from 'react'

export const ItemDetail = ({item}) => {
    return (
        <div className="card bg-light d-flex flex-fill">
            <div className="card-header text-muted border-bottom-0">
                Digital Strategist
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col-7">
                        <h2 className="lead"><b>{item.title}</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> {item.description} </p>
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
                    <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal-lg">
                        <i className="fas fa-eye"></i> Show Detail
                    </button>
                </div>
            </div>
        </div>
    )
}
