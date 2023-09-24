import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

export const Navbar = () => { 
  let auth = localStorage.getItem('user')
  
  let navigate = useNavigate()
  const logout =()=>{
     localStorage.clear()
     navigate('/login')
  }
  return (
    <>
    
    <div className="toggle">
      <label htmlFor="check">
        <span></span>
        <span></span>
        <span></span>
        
      </label>
    </div>


    <input type="checkbox" id="check"/> 

       <ul className='nav'>
       <li><Link to="/" className='a'>Home</Link></li>
                  <li> <Link to="/register" className='a' >Register</Link></li> 
                  <li>  <Link to="/login" className='a'>Login</Link> </li>
                  <li>  <Link to="/addProduct" className='a'>Add Product</Link></li> 
                  <li>   <Link to="/reviewProduct" className='a'>Review Product</Link></li> 
                  <li>    <Link to="/orderProduct" className='a'>Order Product</Link></li> 
                  <li>   <Link to="/trackOrder" className='a'>Track Order</Link></li> 
       
          
           
       </ul>
    </>
  )
}
