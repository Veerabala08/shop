import { useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const email = useRef()
    const password = useRef()
    let navigate = useNavigate();

  const handleSubmit= ()=>{
    localStorage.clear();
    if(email.current.value == "admin@gmail.com"&&password.current.value == "123QW!qw"){
        localStorage.setItem("emailData","admin@gmail.com")
        localStorage.setItem("passwordData","123QW!qw")
    }
    navigate("/home")
    window.location.reload()
  }
    return (
    <>
      <div className="outer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">
            Welcome <br />
            <span>signin to continue</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref = {email}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref = {password}
            className="input"
          />
          <button className="button-confirm">Login →</button>
        </form>
      </div>
    </>
  );
}

export default Login;
