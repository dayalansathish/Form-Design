import React from 'react'
import './Forgot.css'

function Forgotpwd() {
  return (
    <div className='container-fluid forgot'>
          

      <div className='container w-50 border border-5 border-white rounded-5 py-2'>
        <div className=' text-center py-4'>
          <h2 className='font-monospace text-decoration-underline'>Forgot Password</h2>
        </div>
        <div className='text-center py-3'>
          <p>Enter the email address associated with your account<br /> and we'llsend a link to reset your password.</p>
        </div>
        <div className='text'>
          <label class="form-label p-2">Email :</label>
          <input type="text" class="form-control text-black-50 w-75 p-2 mb-4  " placeholder='123@gamil.com' />
        </div>
        <div className='d-flex justify-content-center m-3'>
          <button className='btn  btn-outline-dark  '>Forgot Password</button>
        </div>
      </div>
    </div>
  )
}

export default Forgotpwd