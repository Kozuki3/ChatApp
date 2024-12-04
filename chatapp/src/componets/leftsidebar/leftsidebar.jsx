import React from 'react'
import './leftsidebar.css'
import Image from '../../assets/image'

const leftsidebar = () => {
  return (
    <div className='ls'>
      <div className='ls-top'>
        <div className='ls-nav'>
          <img src={Image.Meetme} className='logo' alt=''/>
          <div className='menu'>
            <img src={Image.Dots} alt=''/>
          </div>
        </div>
        <div className='ls-search'>
          <img src={Image.Search} alt=''/>
          <input type='text' placeholder='Search here'/>
        </div>    
        </div>  
        <div className='ls-list'>
          {Array(12).fill("").map((item,index)=>(
            <div key={index} className='friends'>
              <img src={Image.SexyBrown} alt=''/>
              <div>
              <p>Sexy Brown</p>
              <span>Hello, How are you</span>
              </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default leftsidebar
