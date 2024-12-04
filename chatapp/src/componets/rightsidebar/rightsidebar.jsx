import React from 'react'
import './rightsidebar.css'
import Image from '../../assets/image'

const rightsidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profi;e">
        <img src={Image.SexyBrown} className='r-prof'/>
        <h3><img src={Image.DotGreen} className='dot'/>Black Baby Brown</h3>
        <p className='p'>Hi there I am Baby Brown</p>
      </div>
      <hr/>
      <div className='rs-media'>
        <p>Media</p>
        <div>

          <img src={Image.SexyBrown} />
          <img src={Image.SexyBrown} />
          <img src={Image.SexyBrown} />
          <img src={Image.SexyBrown} />
          <img src={Image.SexyBrown} />
          <img src={Image.SexyBrown} />
          
        </div>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default rightsidebar
