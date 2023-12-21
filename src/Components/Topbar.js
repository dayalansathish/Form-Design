import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fs-5" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to={'/login'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" aria-current="page" href="#">Login</a>
        </li>
        </Link>
        <Link to={'/create/account'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" href="#">Create-Account</a>
        </li>
        </Link>
        <Link to={'/forgot/pwd'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" href="#">Forgot-Pwd</a>
        </li>
        </Link>
        <Link to={'/verify/otp'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" >Verify-Otp</a>
        </li>
        </Link>
        <Link to={'/reset/pwd'}>
        <li class="nav-item px-5">
          <a class="nav-link fs-5 fw-semibold" href="#">Reset-Pwd</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Topbar