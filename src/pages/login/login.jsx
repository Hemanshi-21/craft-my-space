import React, { useState, useEffect } from 'react'
import "./login.css"
import HomeImage from "../../assets/homeImage-removebg-preview.jpg"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  useEffect(() => {
    if (email === '' || password === '') {
      setBtnDisabled(true);
    }
    else {
      setBtnDisabled(false);
    }

  }, [email, password])


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(true);
      setErrorMsg("Please enter correct email.")
      setBtnDisabled(true);
      setTimeout(() => {
        document.getElementsByClassName("error")[0].style.display = "none"
      }, 3000);
    } else {
      setBtnDisabled(true);
      axios.post('http://localhost:9092/user/signIn', {
        email: email,
        password: password
      })
        .then(function (response) {
          setTimeout(() => {
            document.getElementsByClassName("success")[0].style.display = "none"
          }, 2000);
          setSubmitted(true);
          setError(false);
          setTimeout(() => {
            navigate(
              "/house-size",
              {
                  state: {
                      userName: response.data.object.userName
                  }
              }
  
          );
          }, 4000);
          localStorage.setItem("userid", response.data.object.userId);
        })
        .catch(function (error) {
          setError(true);
          setTimeout(() => {
            document.getElementsByClassName("error")[0].style.display = "none"
          }, 3000);
          setErrorMsg(error.response.data.responseCodeJson.message)
        });
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <p>User login successfully!!</p>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>{errorMsg}</p>
      </div>
    );
  };


  return (
    <div className="login-container">
      <div className='login-container__image-section'>
        <h1 className='login-container__image-section__title'>Welcome to<br />Craft My Space</h1>
        <img src={HomeImage} className='login-container__image' alt="home-page" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        <div className='login-container__form-section'>
          <h1 className='login-container__form-section__title'>Log In</h1>
          <form className='login-container__form'>
            <input className='login-container__form__input-text' type="email" placeholder='Enter your email' onChange={handleEmail} />
            <input className='login-container__form__input-text' type="password" placeholder='Enter your password' onChange={handlePassword} />
            <button className={btnDisabled ? 'login-container__form__btn disabled' : 'login-container__form__btn'} type='submit' onClick={(e) => handleSubmit(e)}>Log me in </button>
          </form>
          <hr className='login-container__hr'></hr>
          <h5 className='login-container__login-text'>Need an account? <a href='/signup'>Sign Up</a></h5>
        </div>

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
      </div>
    </div>
  )
}

export default Login


