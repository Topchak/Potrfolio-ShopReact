import './CSS/LoginSingup.css'

function LoginSingup() {
  return (
    <div className="loginSingup"> 
      <div className="container">
        <form className="loginSingup-form">
        <h1>Sign Up</h1>
          <div className="loginSingup-inputs">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Continue</button>
          <p className="loginSingup-login">Already have an account? <span>Log In here</span></p>
          <div className="loginSingup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginSingup