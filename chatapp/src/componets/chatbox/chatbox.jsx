import './chatbox.css'
import Image from '../../assets/image'

const ChatBox = () => {
  return (
    <div className='chat-box'>
        <div className='chat-user'>
          <img src={Image.SexyBrown} alt=''/>
          <p>Sexy Brown <img className='dot' src={Image.DotGreen} alt=''/> </p>
          <img src={Image.Help} className='help' alt=''/>
        </div>

        
        <div className='chat-msg'>
          <div className='s-msg'>
            <p className='msg'>Lorem ipsum is a t .... </p>
            <div>
              <img src={Image.SexyBrown} alt=''/>
              <p>8.40 AM</p>
            </div>
          </div>
          <div className='s-msg'>
            <img src={Image.China} className='msg-img' alt=''/>
            <div>
              <img src={Image.SexyBrown} alt=''/>
              <p>8.40 AM</p>
            </div> 
          </div>
          <div className='r-msg'>
            <p className='msg'>Lorem ipsum is a t .... </p>
            <div>
              <img src={Image.SexyBrown} alt=''/>
              <p>8.40 AM</p>
            </div>
          </div>
        </div>
        <div className='chat-input'>
          <input type='text' placeholder='send a message'/>
          <input type='file' id='image' accept='img/png, img/jpeg' hidden/>
          <label htmlFor='image'>
            <img src={Image.Image} alt=''/>
          </label>
          <img src={Image.Send} alt='send'/>
        </div>
    </div>
  )
  }

export default ChatBox