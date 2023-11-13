import React from 'react'

function Login() {

function handleSubmit(e) {
  e.preventDefault()

 let form =new FormData(e.currentTarget)


        alert(form.get("email"))
        alert(form.get("password"))
}

  return (
    <div className='login'>
      <div className='container'>
          <div className='center'>
        <form onSubmit={(e) =>handleSubmit(e)} className='format'>
         <div>
          <h3 className='text'>Login Here</h3>
         </div>
          <div>
            <label htmlFor="" className='loginlb'>Email</label>
            <input type="text" placeholder='email' className='input' />
          </div>

            <div>
              <label htmlFor="" className='login1b'>Password</label>
              <input type="text" name='password' placeholder='password' className='input'/>
            </div>

              <button className='btn2'>Login</button>

        </form>
        </div>
      </div>

    </div>
  )
}

export default Login