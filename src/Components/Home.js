import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {

    const navigate = useNavigate()

    return (

        <div className='container-fluid bg-warning yellow'>
            <div className='container'>
                <div className='text-center react'>
                    <h1 className='display-1'>React Js</h1>
                </div>
                <div className='home'>
                    <button className='btn btn-dark px-3  m-auto home' onClick={() => navigate('/login')}>Log in</button>
                </div>
            </div>
        </div>

    )
}

export default Home