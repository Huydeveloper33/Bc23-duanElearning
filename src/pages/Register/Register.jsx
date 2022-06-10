import React from 'react'

export default function Register() {
  return (
    <form >
      <div className="container">
      

    <h3>Sign up and start learning</h3>

<div className="row">
  <div className="col-md-6">
  <input type="text" placeholder='FullName' />
  <input type="text" placeholder='Email' />
  <input type="text" placeholder='Password' />
  </div>
</div>
  


    <div className="form-check">
     <label className="form-check-label">
    <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
    Send me special offers, personalized recommendations, and learning tips
     </label>
    </div>

      </div>
    
    


  </form>
  )
}
