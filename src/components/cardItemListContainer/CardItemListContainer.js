import React from 'react'

export const CardItemListContainer = (props) => {
        return (
            <>{
                props.products.map(product => (
                    <div key={product.id}>
                        <a href="#javascript" className="dropdown-item">
                            {/** Product Start */}
                            <div className="media">
                                <img src={ product.img } alt="Product" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        { product.name }
                                        <span className={`float-right text-sm ${product.style}`}>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </h3>
                                    <p className="text-sm">The short description goes here</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                </div>
                            </div>
                            {/** Product End */}
                        </a>
                        <div className="dropdown-divider"></div>
                    </div>
                ))
            }</>
    )
}
