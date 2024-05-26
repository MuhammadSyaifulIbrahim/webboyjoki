import React from 'react';
import '../components/Register.css';
import { FaUser } from "react-icons/fa";

const Register = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type='text' placeholder='NamaLengkap' required/>
            </div>

            <div className='input-box'>
                <input type='text' placeholder='Email' required/>
            </div>

            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
            </div>

            <div className='input-box'>
                <input type='password' placeholder='Konfirmasi Password' required/>
            </div>

            <div className='ketentuan'>
                <p>Dengan mendaftar, anda setuju dengan Persyaratan dan Ketentuan kami.</p>           
            </div>

            <button type='submit' className='button-daftarakun'>Daftar Akun</button>

            <div className='register-link'>
                <p>Already have an account? <a href='#'>Login</a></p>

            </div>
        </form>        
    </div>
  )
}

export default Register;