import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div>
            <ul className='list-unstyled'>
                <li>
                    <Link to={'/Products'}>products</Link>
                </li><li>
                    <Link to={'/Category'}>categores</Link>
                </li>
            </ul>


        </div>
    )
}
