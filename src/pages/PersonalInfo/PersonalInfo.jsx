import React from 'react'
import PersonalManagement from './PersonalManagement'
import RegisterForm from './RegisterForm'

export default function PersonalInfo() {
  return (
    <div className='container-fluid'>
      <h3>Quản lý Người Dùng</h3>
      <RegisterForm/>
     <PersonalManagement/>

    </div>
  )
}
