import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderHome(props) {
  return (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <a className="navbar-brand" href="#">Cybersoft</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Danh sách khóa học <span className="sr-only">(current)</span></NavLink>
      </li>
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 w-100" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
    </form>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Đăng ký</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
      </li>
    </ul>
   
  </div>
</nav>

  )
}

