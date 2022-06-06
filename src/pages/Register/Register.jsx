import React from 'react'

export default function Register() {
  return (
    <form className="contanier">
    <h3>Đăng ký</h3>
    <div className="form-group">
      <p>Tài khoản</p>
      <input id="taiKhoan" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Mật khẩu</p>
      <input id="matKhau" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Nhập lại Mật khẩu</p>
      <input id="nhaplaimatKhau" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Họ Tên</p>
      <input id="hoTen" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Email</p>
      <input id="email" className="form-control"  />
    </div>
    <div className="form-group">
      <p>Số Điện Thoại</p>
      <input id="soDienThoai" className="form-control"  />
    </div>
    <div className="form-group">
    <button className="btn btn-success" type="submit">Đăng nhập</button>
    <button className="btn btn-success" type="submit">Đăng ký</button>
    </div>
  </form>
  )
}
