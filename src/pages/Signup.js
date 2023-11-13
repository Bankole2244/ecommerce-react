import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <div className='center'>
        <div className=''>
      <form className='format'>
        
       <div>
        <h3>Sign Up</h3>
        </div> 
      <div>
      <label className='' for="username">First name</label>
        <input className='input1' type="text" placeholder="first name"/>
      </div>

      <div>
      <label for="username">Last name</label>
        <input className='input1' type="text" placeholder="last name"/>
      </div>

        <div>
        <label for="username">Email</label>
        <input type="text" className='input1' placeholder="email"/>
        </div>

          <div>
          <label for="username">Password</label>
        <input type="password" className='input1' placeholder="password "/>
          </div>
              <button className='btn3'>Signup</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Signup