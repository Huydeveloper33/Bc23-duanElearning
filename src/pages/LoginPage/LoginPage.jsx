import React from 'react'

export default function LoginPage() {
  return (
    <form className="contanier">
    <h3>Đăng nhập</h3>
    <div className="form-group">
      <p>Tài khoản</p>
      <input id="taiKhoan" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Mật khẩu</p>
      <input id="matKhau" className="form-control"  />
    </div>
    <div className="form-group">
    <button className="btn btn-success" type="submit">Đăng nhập</button>
    <button className="btn btn-success" type="submit">Đăng ký</button>
    </div>
  </form>
  )
}
