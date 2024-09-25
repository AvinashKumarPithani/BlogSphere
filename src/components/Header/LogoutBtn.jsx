import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {
  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn