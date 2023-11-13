import React from 'react'
import { BsFillAspectRatioFill, BsFillCameraReelsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {addToCart} from "../Redux/cart"
import { useDispatch } from 'react-redux'

function Productcard({data}) {

  const dispatch = useDispatch()

  function handleClick (){
    dispatch(addToCart())
  }

  return (
    <Link to={`/details/${data.id}`}>
    <div className='productcard'>
        <div className='card'>
            <img src={data.images[0]} alt="" className='card-img-top' />
            <div className='card-body text-primary fw-bold position-relative z-0 '>
                {data.title}


                <div onClick={() => handleClick()} className='shadow position-absolute end-0 d-flex justify-content-center align-items-center rounded-circle bg-white' style={{height:"3rem",width:"3rem",top:"-2rem", zIndex:10}}>
                    <BsFillAspectRatioFill color='red'/>
                    </div>

            </div>

            <div className='card-footer'>
                ${data.price}
            </div>

        </div>

    </div>
    </Link>
  )
}

export default Productcard