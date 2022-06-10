import React from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <form>
      <div className="container">
       <div className="row">
         <div className="col-md-6">
         <a href="/facebooklogin" className="fbLogin">
          <i class="fab fa-facebook"></i>
          <p>Continue with Facebook</p>
        </a>
        <a href="/googlelogin" className="ggLogin">
          <i class="fab fa-google"></i>
          <p>Continue with Google</p>
        </a>
        <a href="/applelogin">
          <i class="fab fa-apple" className="appleLogin"></i>
          <p>Continue with Apple</p>
        </a>
        <input id="taiKhoan" className="form-control" placeholder="Email" />
        <input id="taiKhoan" className="form-control" placeholder="Password" />
        <button className="btn -btn-success">Login</button>
        <br />
        or
        <a href="/forgotpassword">Forgot Password</a>
        <p>Don't have an account</p>
        <a href="/signup">Sign up</a>
        <br />
        <a href="/organization">Log in with your organization</a>
         </div>
       </div>
      </div>
    </form>
  );
}
