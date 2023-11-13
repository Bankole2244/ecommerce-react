import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="cart">
        <img src="./../../images/car.jpg" alt="" />
    <div class="table-responsive container mt-4">
        <table class="table border ">
            <thead>
                <tr className=''style={{borderBottom: "5px solid #000 "}}>
                    <th scope="col">Image</th>
                    <th scope="col">Product Tittle</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <Link to={"/details"} class="">
                    <td><img src="./../../images/cars.jpg" alt="" /></td>
                    <td>Benz</td>
                    <td>$20000</td>
                    <td>1</td>
                    <td> <AiOutlineDelete/></td>
                </Link>
                <tr class="">
                    <td><img src="./../../images/toyota.jpg" alt="" /></td>
                    <td>Toyota</td>
                    <td>$10000</td>
                    <td>2</td>
                    <td> <AiOutlineDelete/></td>
                </tr>
            </tbody>
        </table>

        <div className=''>
           <div className="d-flex">
           <h1 >Subtotal : $</h1>
           <h2 className='text-danger'>1500</h2>
           </div>
            <h5>Taxes and shipping will calculate a checkout</h5>
        </div>
           <div className="my-5">
           <button className='btn btn-danger '>Continue Shopping</button>     
            <button className='btn btn-danger mx-3'>Proceed to checkout</button>
           </div>
    </div>
    

    </div>

   

  )
}

export default Cart