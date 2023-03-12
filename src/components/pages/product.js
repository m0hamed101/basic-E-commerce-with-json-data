import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const Product = () => {

  const [product, setproduct] = useState([]);
  useEffect(() => {
    getproduct()
  }, [])

  const getproduct = () => {
    fetch('http://localhost:9000/product')
      .then((res) => res.json())
      .then((data) => {
        setproduct(data)
      })
  }

  const deleteproduct = (product) => {
    Swal.fire({
      title: `are you sure to delete ------>> ${product.title}`,
      showCancelButton: true
    }).then((data) => {
      if (data.isConfirmed) {

        fetch(`http://localhost:9000/product/${product.id}`,
          { method: "DELETE" }
        ).then((res) => res.json())
          .then(getproduct())

      }
    })

  }
  return (
    <div>
      <h1>Product Page</h1>
      <Link to={'./add'} className='btn btn-success'>Add New Item</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">operation</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {

            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button className='btn-sm btn btn-danger m-1' onClick={() => { deleteproduct(product) }}>Delete</button>
                  <Link to={`./${product.id}`} className='btn-sm btn btn-info m-1'>view</Link>
                  <button className='btn-sm btn btn-primary m-1'>edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
