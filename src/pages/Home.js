import React, {useEffect, useState} from 'react'
import { BsSearch } from "react-icons/bs"
import Productcard from './../Common/Productcard';
import axios from "axios"
import { Link } from 'react-router-dom';




function Home() {

  const [products, setProducts]= useState([])

    useEffect(()=>{

      axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10 ")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))

    },[])

  

  function calculate() {
    let a = 5;
    let b = 41;
    let c = a + b;
    alert(c)

  }

  function des() {

    for (let i = 0; i > 2; i++) {
      alert("Hello world")
    }
  }

  // const products = [
  //   { id: 1, tittle: "Benz", price: "10,000", img: "./../../images/Benz.jpg", },
  //   { id: 2, tittle: "Toyata", price: "20,000", img: "./../../images/toyota.jpg", },
  //   { id: 3, tittle: "bmw", price: "10,000", img: "./../../images/cbt.jpg", },

  // ]

  return (
    <div>
      <div className="banner">
        <form className='w-50 m-auto d-flex'>
          <input onChange={() => des()} type="text" className='form-control' />
          <button type='button' onClick={() => calculate()} className="btn btn-dark"><BsSearch /></button>
        </form>

      </div>

      <div className='products container p-5 '>
        <h1 className='h1'>Hot Offer</h1>

        <div className='row mt-5 g-5 '>

          {products.map((item) => (
            <div key={item.id} className='col-md-4'>

              
                <Productcard data={item} />


            </div>
          ))}


        </div>


      </div>
    </div>
  )
}

export default Home