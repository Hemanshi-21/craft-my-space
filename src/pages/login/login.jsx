import React from 'react'
import "./login.css"
import HomeImage from "../../assets/homeImage-removebg-preview.jpg"

export default function Login() {
  return (
    <div className="login-container">
      <div className='login-container__image-section'>
        <h1 className='login-container__image-section__title'>Welcome to<br />Craft My Space</h1>
        <img src={HomeImage} className='login-container__image' alt="home-page" />
      </div>
      <div className='login-container__form-section'>
        <h1 className='login-container__form-section__title'>Log In</h1>
        <form className='login-container__form'>
          <input className='login-container__form__input-text' type="text" placeholder='Enter your email' />
          <input className='login-container__form__input-text' type="text" placeholder='Enter your password' />
          <button className='login-container__form__btn' type='submit'>Log me in </button>
        </form>
        <hr className='login-container__hr'></hr>
        <h5 className='login-container__login-text'>Need an account? <a href='/signup'>Sign Up</a></h5>
      </div>
    </div>
  )
}


