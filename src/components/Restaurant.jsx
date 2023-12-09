import React from 'react'

const Restaurant = () => {
  return (
    <div className='res-card'style={{backgroundColor:"#f0f0f0"}}>
      <img className='card-img'
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
        alt="logo-card"
          />
          <h3>KFC</h3>
          <h4>3.9stars</h4>
          <h4>Burgers,Biryani,American</h4>
    </div>
  );
}

export default Restaurant