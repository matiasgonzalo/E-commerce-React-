import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({id, image1, title, description, quantity, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <tr key={id}>
            <td>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <img alt="Avatar" className="table-avatar" src={image1} />
                    </li>
                </ul>
            </td>
            <td>
                <Link to={`/item/${id}`}>
                    { title }
                </Link>
            </td>
            <td>
                <small>
                    { description }
                </small>
            </td>
            <td className="text-center">
                { quantity } u
            </td>
            <td className="text-center">
                ${ price }
            </td>
            <td className="project-actions text-center">
                <Link to={`/item/${id}`} className="btn btn-primary btn-xs mr-1" href="#javacript">
                    <i className="fas fa-eye">
                    </i>
                </Link>
                <a className="btn btn-danger btn-xs" href="#javacript" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash">
                    </i>
                </a>
            </td>
        </tr>
    )
}
