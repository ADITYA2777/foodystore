
import React from 'react'

const Header = () => {
  return (
    <div className="Header">
      <div className='logo-container'>
        <img className='logo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWycK1c1Xf9Hr8MrAwj16q1XlDyYy1euwybQ&usqp=CAU" 
          alt=""
        />
          </div>
          <div className='nav-items'>
              <ul>
                  <li>Home</li>
                  <li>AboutUs</li>
                  <li>ContactUs</li>
                  <li>Cart</li>
              </ul>
          </div>
    </div>
  );
}

export default Header