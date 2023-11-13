
import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {

  const { id } = useParams()

  const[product, setProducts ] = useState(null)

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className='d-flex container' >
      <div className='row'>
      <div className='col-md-6 ' >
      <img src={product?.image} alt="" style={{width:"100%", height:"50%"}}/>
      </div>
      <div className='col-md-6'>
      <h1 className='Description'> {product?.tittle}</h1>
      <h1>{product?.description}</h1>
      <h1 className=''>Price:{product?.price}</h1>
      </div>
      </div> 
    </div>
  )
}

export default Details