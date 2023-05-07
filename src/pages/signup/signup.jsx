import React, {useState,useEffect} from 'react'
import "./signup.css"
import HomeImage from "../../assets/homeImage-removebg-preview.jpg"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


 const Signup = () => {
  const navigate = useNavigate()


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true);

   // Handling the name change
   const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
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
    if (name === '' || email === '' || password === '') {
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
      setTimeout(() => {
        document.getElementsByClassName("error")[0].style.display="none"
      }, 3000);
      setErrorMsg("Please enter correct email.")
      setBtnDisabled(true);
    } else {
      setBtnDisabled(true);
      axios.post('http://localhost:9092/user/signup', {
        userName: name,
        email: email,
        password: password
      })
      .then(function (response) {
        setTimeout(() => {
          document.getElementsByClassName("success").style.display="none"
        }, 2000);
        setSubmitted(true);
        setError(false);
        setTimeout(() => {
          navigate(
            "/login",
        );
        }, 2000);
      })
      .catch(function (error) {
        setError(true);
        setTimeout(() => {
          document.getElementsByClassName("error")[0].style.display = "none"
        }, 2000);
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
        <h1>User {name} successfully registered!!</h1>
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
        <h1>{errorMsg}</h1>
      </div>
    );
  };
  
  return (
    <div className="signup-container">
      <div className='signup-container__image-section'>
        <h1 className='signup-container__image-section__title'>Welcome to<br />Craft My Space</h1>
        <img src={HomeImage} alt="home-page" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
      <div className='signup-container__form-section'>
        <h1 className='signup-container__form-section__title'>Sign up</h1>
        <form className='signup-container__form'>
          <input className='signup-container__form__input-text' type="text" placeholder='Enter your name' onChange={handleName} /> 
          <input className='signup-container__form__input-text' type="email" placeholder='Enter your email'  onChange={handleEmail}/>
          <input className='signup-container__form__input-text' type="password" placeholder='Enter your password' onChange={handlePassword}/>
          <button className={btnDisabled ? 'signup-container__form__btn disabled' : 'signup-container__form__btn'} type='submit' onClick={(e)=>handleSubmit(e)}>Sign me up</button>
        </form>
        <hr className='signup-container__hr'></hr>
        <h5 className='signup-container__login-text'>Already have an account? <a href='/login'>Login</a></h5>
        </div>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
      </div>
    </div>
  )
}

export default Signup


