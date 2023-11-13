import React from 'react'
import { Link } from 'react-router-dom'
import {BiLogoFacebookSquare} from "react-icons/bi"
import {BiLogoInstagram,BiLogoTwitter} from "react-icons/bi"

function Footer() {
    return (
        <div className='bg-primary p-5 text-white'>
            <div className="container">
                <div className="row">
                    {/* first column */}
                    <div className="col-md-3">
                        <p>Contact</p>
                        <small>No 86 olowoira Berger, off ojobu Lagos state</small>
                    </div>

                    {/* second column */}
                    <div className="col-md-3">
                        <p>Menu</p>
                        <Link className='nav-link'>Home</Link>
                        <Link className='nav-link'>Shop</Link>
                        <Link className='nav-link'>Payment</Link>

                    </div>

                    {/* third column */}
                    <div className="col-md-3">
                        <p>Company</p>
                        <Link className='nav-link'>Menu</Link>
                        <Link className='nav-link'>Terms</Link>
                        <Link className='nav-link'>Payment</Link>

                    </div>

                    {/* fourth column */}
                    <div className="col-md-3">
                        <p>Link</p>
                        <Link className='nav-link'><BiLogoFacebookSquare/>Facebook</Link>
                        <Link className='nav-link'><BiLogoTwitter/>X</Link>
                        <Link className='nav-link'><BiLogoInstagram/>Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer