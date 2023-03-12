import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const AddProducts = () => {
  const [title, settitle] = useState('');
  const [price, setprice] = useState(0);
  let Navigate = useNavigate()
  const formSubmit = (e) => {
    e.preventDefault()


    // Send a POST request

    axios.post("http://localhost:9000/product",
      {
        title,
        price
      }).then((data) => {
        Navigate('/Products')
      })

    // fetch("http://localhost:9000/product", {
    //   method: "POST",
    //   headers:{
    //     "Content-Type":"Application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     price
    //   })
    // }).then((res) => res.json())
    // .then((data) => { console.log(data) })
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label className="form-label">product Add page</label>
          <input onChange={(e) => settitle(e.target.value)} placeholder='product title' type="text" className="form-control mb-3" id="product" aria-describedby="product" />
          <input onChange={(e) => setprice(e.target.value)} placeholder='product price' type="number" className="form-control mb-3" id="product" aria-describedby="product" />
        </div>
        <button type="submit" className="btn btn-primary">add product</button>
      </form>
    </div>
  )
}
