import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import product1 from './assets/img/prod-1.jpg'
import product2 from "./assets/img/prod-2.jpg";
import product3 from "./assets/img/prod-3.jpg";
import product4 from "./assets/img/prod-4.jpg";
import product5 from "./assets/img/prod-5.jpg";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProductById(1)
            .then(resp => {
                setProduct(resp)
            })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
    }, [])

    return (
        <div className="modal fade" id="modal-lg">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header bg-info">
                        <h4 className="modal-title">Product Detail</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        { loading ? 
                            <div className="overlay-wrapper" style={{minHeight:"70px"}}>
                                <div className="overlay dark">
                                    <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                                    <div className="text-bold text-white pt-2"> </div>
                                </div>
                            </div>
                            :
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <h3 className="d-inline-block d-sm-none">{product.title}</h3>
                                    <div className="col-12">
                                        <img src={product1} className="product-image" alt="Product" />
                                    </div>
                                    <div className="col-12 product-image-thumbs">
                                        <div className="product-image-thumb active">
                                            <img src={product1} alt="Product" />
                                        </div>
                                        <div className="product-image-thumb" >
                                            <img src={product2} alt="Product" />
                                        </div>
                                        <div className="product-image-thumb" >
                                            <img src={product3} alt="Product" />
                                        </div>
                                        <div className="product-image-thumb" >
                                            <img src={product4} alt="Product" />
                                        </div>
                                        <div className="product-image-thumb" >
                                            <img src={product5} alt="Product" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h3 className="my-3">{product.title}</h3>
                                    <p>{product.description}</p>

                                    <hr />
                                    <h4>Available Colors</h4>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-default text-center active">
                                            <input type="radio" name="color_option" id="color_option_a1" autocomplete="off" checked />
                                            Green
                                            <br />
                                            <i className="fas fa-circle fa-2x text-green"></i>
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_a2" autocomplete="off" />
                                            Blue
                                            <br />
                                            <i className="fas fa-circle fa-2x text-blue"></i>
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_a3" autocomplete="off" />
                                            Purple
                                            <br />
                                            <i className="fas fa-circle fa-2x text-purple"></i>
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_a4" autocomplete="off" />
                                            Red
                                            <br />
                                            <i className="fas fa-circle fa-2x text-red"></i>
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_a5" autocomplete="off" />
                                            Orange
                                            <br />
                                            <i className="fas fa-circle fa-2x text-orange"></i>
                                        </label>
                                    </div>

                                    <h4 className="mt-3">Size <small>Please select one</small></h4>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_b1" autocomplete="off" />
                                            <span className="text-xl">S</span>
                                            <br />
                                            Small
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_b2" autocomplete="off" />
                                            <span className="text-xl">M</span>
                                            <br />
                                            Medium
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_b3" autocomplete="off" />
                                            <span className="text-xl">L</span>
                                            <br />
                                            Large
                                        </label>
                                        <label className="btn btn-default text-center">
                                            <input type="radio" name="color_option" id="color_option_b4" autocomplete="off" />
                                            <span className="text-xl">XL</span>
                                            <br />
                                            Xtra-Large
                                        </label>
                                    </div>

                                    <div className="bg-gray py-2 px-3 mt-4">
                                        <h2 className="mb-0">
                                            $80.00
                                        </h2>
                                        <h4 className="mt-0">
                                            <small>Ex Tax: $80.00 </small>
                                        </h4>
                                    </div>

                                    <div className="mt-4">
                                        <div className="btn btn-primary btn-lg btn-flat">
                                            <i className="fas fa-cart-plus fa-lg mr-2"></i>
                                            Add to Cart
                                        </div>

                                        <div className="btn btn-default btn-lg btn-flat">
                                            <i className="fas fa-heart fa-lg mr-2"></i>
                                            Add to Wishlist
                                        </div>
                                    </div>

                                    <div className="mt-4 product-share">
                                        <a href="#javascript" className="text-gray">
                                            <i className="fab fa-facebook-square fa-2x"></i>
                                        </a>
                                        <a href="#javascript" className="text-gray">
                                            <i className="fab fa-twitter-square fa-2x"></i>
                                        </a>
                                        <a href="#javascript" className="text-gray">
                                            <i className="fas fa-envelope-square fa-2x"></i>
                                        </a>
                                        <a href="#javascript" className="text-gray">
                                            <i className="fas fa-rss-square fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                {/** /.modal-content */}
            </div>
            {/** /.modal-dialog */}
        </div>
    )
}
