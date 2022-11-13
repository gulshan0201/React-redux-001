import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLight } from '../slice'
import './style.css'

const Navbar = () => {

  const dispatch = useDispatch()

  const isLigth = useSelector((state) => state.isLigth)

  return (
    <div className='nav-bar'>
      <h2>Nav-bar</h2>
      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/services'>Services</Link>
      <button className='btn' onClick={() => {
        const message = `I have changed theme to ${isLigth ? "Dark" : "Light"}`
        dispatch(setLight(message))
      }}>
        Toggle button {isLigth ? "Dark" : "Light"}</button>
    </div>
  )
}

export default Navbar