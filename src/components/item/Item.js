import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
        <>
            {/** Main content */}
            <div className="card bg-light d-flex flex-fill">
                <div className="card-header text-muted border-bottom-0">
                    {item.categoryName}
                </div>
                <div className="card-body pt-0">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="lead"><b>{item.title}</b></h2>
                            <p className="text-muted text-sm"><b>About: </b> {item.description} </p>
                        </div>
                        <div className="col-5 text-center">
                            <img src={item.image1} alt={item.description} className="img-circle img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-right">
                        <Link to={`/item/${item.id}`} type="button" className="btn btn-sm btn-primary">
                            <i className="fas fa-eye"></i> Show Detail
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
