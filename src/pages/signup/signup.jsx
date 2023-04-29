import React from 'react'
import "./signup.css"
import HomeImage from "../../assets/homeImage-removebg-preview.jpg"

export default function Signup() {
  return (
    <div className="signup-container">
      <div className='signup-container__image-section'>
        <h1 className='signup-container__image-section__title'>Welcome to<br />Craft My Space</h1>
        <img src={HomeImage} alt="home-page" />
      </div>
      <div className='signup-container__form-section'>
        <h1 className='signup-container__form-section__title'>Sign up</h1>
        <form className='signup-container__form'>
          <input className='signup-container__form__input-text' type="text" placeholder='Enter your name' /> 
          <input className='signup-container__form__input-text' type="text" placeholder='Enter your email' />
          <input className='signup-container__form__input-text' type="text" placeholder='Enter your password' />
          <button className='signup-container__form__btn' type='submit'>Sign me up</button>
        </form>
        <hr className='signup-container__hr'></hr>
        <h5 className='signup-container__login-text'>Already have an account? <a href='/login'>Login</a></h5>
      </div>
    </div>
  )
}


