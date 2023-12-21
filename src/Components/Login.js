import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  return (
    // <div>
    //   <Modal>
    //     <ModalHeader>Log in with react</ModalHeader>
    //     <ModalBody>
    //       <div>
    //       <input type='text' placeholder='Email or Phone Number'></input>
    //       </div>
    //       <div>
    //       <input type='password' placeholder='Password'></input>
    //       </div>
    //     <div>
    //       <input type='checkbox'></input>Keep me Signed in
    //     </div>

    //     </ModalBody>
    //     <ModalFooter>
    //       <div>
    //       Forgot password?
    //       </div>
    //       <div>
    //         Create Account
    //       </div>

    //     </ModalFooter>
    //   </Modal>
    // </div>
    <div className='container log '>
      <div className='mt-5'>
        <h1>Log in with react</h1>
      </div>
      <div className='my-3'>
      <input className='m-2 p-2 w-50 border border-secondary rounded' type='text' placeholder='Email or Phone Number'></input>
      </div>
      <div className='my-3'>
      <input className='m-2 p-2 w-50 border border-secondary rounded' type='password' placeholder='Password'></input>
      </div>
      <div>
        <button className='btn btn-warning'>Log in</button>
      </div>
      <div className='my-5'>
        <input type='checkbox'className='mx-2'></input><span className=''>Keep me Signed in</span>
      </div>
      <div className='my-2'>
        <a href='' onClick={()=>navigate('/forgot/pwd')}>Forgot Password ?</a>
      </div>
      <div className='my-3'>
        <a href=''onClick={()=>navigate('/create/account')}>Create an account</a>
      </div>
    </div>
  )
}

export default Login