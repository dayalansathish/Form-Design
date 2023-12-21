import React from 'react'
import './Reset.css'
function Resetpwd() {
  return (

    <div className='container-fluid reset-pwd'>
      
      <div className='container w-50 border border-warning rounded-5'>
        <div className='text-decoration-underline text-center m-4'>
          <h1>Reset Password</h1>
        </div>
        <div className='reset py-3'>
          <label class="form-label p-2">New Password :</label>
          <input type="password" class="form-control  w-75 p-2" placeholder='New Password' />
        </div>
        <div className='reset py-2'>
          <label class="form-label p-2">Confirm New Password :</label>
          <input type="password" class="form-control  w-75 p-2" placeholder='Confirm New Password' />
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-warning p-2 my-3'>Reset</button>
        </div>

      </div>

    </div>

  )
}

export default Resetpwd