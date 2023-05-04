import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../itemCount/ItemCount';

export const ItemDetail = ({ product }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const {id, title, price, image1} = product
        const item = {
            id, title, price, image1
        }

        addItem(item, quantity)
    }

    return (
        <>
            {/** Main content */}
            <div className="row">
                <div className="col-12 col-sm-6">
                    <h3 className="d-inline-block d-sm-none">{product.title}</h3>
                    <div className="col-12">
                        <img src={product.image1} className="product-image" alt="Product" />
                    </div>
                    <div className="col-12 product-image-thumbs">
                        <div className="product-image-thumb active">
                            <img src={product.image1} alt="Product" />
                        </div>
                        <div className="product-image-thumb" >
                            <img src={product.image2} alt="Product" />
                        </div>
                        <div className="product-image-thumb" >
                            <img src={product.image3} alt="Product" />
                        </div>
                        <div className="product-image-thumb" >
                            <img src={product.image4} alt="Product" />
                        </div>
                        <div className="product-image-thumb" >
                            <img src={product.image5} alt="Product" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <h3 className="my-3">{product.title}</h3>
                    <p>{product.description}</p>

                    <hr />
                    <h4>Available Colors</h4>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_a2" autoComplete="off" />
                            Blue
                            <br />
                            <i className="fas fa-circle fa-2x text-blue"></i>
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_a3" autoComplete="off" />
                            Purple
                            <br />
                            <i className="fas fa-circle fa-2x text-purple"></i>
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_a4" autoComplete="off" />
                            Red
                            <br />
                            <i className="fas fa-circle fa-2x text-red"></i>
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_a5" autoComplete="off" />
                            Orange
                            <br />
                            <i className="fas fa-circle fa-2x text-orange"></i>
                        </label>
                    </div>

                    <h4 className="mt-3">Size <small>Please select one</small></h4>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_b1" autoComplete="off" />
                            <span className="text-xl">S</span>
                            <br />
                            Small
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_b2" autoComplete="off" />
                            <span className="text-xl">M</span>
                            <br />
                            Medium
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_b3" autoComplete="off" />
                            <span className="text-xl">L</span>
                            <br />
                            Large
                        </label>
                        <label className="btn btn-default text-center">
                            <input type="radio" name="color_option" id="color_option_b4" autoComplete="off" />
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
                        <div className="margin">
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart" className="btn btn-outline-primary btn-block">
                                        Terminar compra
                                    </Link>
                                ) : (
                                    <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} onAdd={ handleOnAdd }/>
                                )
                            }
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
        </>
    )
}
