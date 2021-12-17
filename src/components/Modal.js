import React from 'react'
import { Link } from 'react-router-dom';
import './Modal.css'
const Modal = () => {
 
    const onSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <>
         <div className='modal' id='email-modal'>
             <div className='modal-content'>
                <span className='close-btn'> <Link to='/'>&times;</Link></span>
                 <div className='modal-content-left'><img id='modal-img' src='' alt='..'/></div>
                 <div className='modal-content-right'>
                     <form action='/' method='GET' className='modal-form' id='form' onSubmit={onSubmit}>

                         <h1>Get Started</h1>
                         <div className='form-validation'>
                             <input type="text" className="modal-input" id="name" name="name" placeholder="Enter your Name"/>
                        <p>Error Message  </p>
                         </div>
                         <div className='form-validation'>
                             <input type="emaul" className="modal-input" id="email" name="email" placeholder="Enter your E-mail"/>
                        <p>Error Message  </p>
                         </div>
                         <div className='form-validation'>
                             <input type="password" className="modal-input" id="password" name="password" placeholder="Enter your Password"/>
                        <p>Error Message  </p>
                         </div>
                         <div className='form-validation'>
                             <input type="password" className="modal-input" id="password-confirm" name="password" placeholder="Confirm your Password"/>
                        <p>Error Message  </p>
                         </div>
                         <input type="submit" className='modal-input-btn' value='Sign Up'/>
                         <span className='modal-input-login'>Already have an Account?Login <a href='#'>here</a></span>
                     </form>
                 </div>
             </div>
             </div>   
        </>
    )
}

export default Modal
