import React from 'react'
import { User } from '../requests'

export default function SignUpPage(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      full_name: formData.get("full_name"),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get("password_confirmation")
    }
    User.create(params).then(user => {
      if(user?.id)
        props.onSignUp()
        props.history.push('/auctions')
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="full_name">Full Name</label>
          <input type="text" name="full_name" id="full_name" />   
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />   
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />   
      </div>
      <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" name="password_confirmation" id="password_confirmation" />   
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  )
}
