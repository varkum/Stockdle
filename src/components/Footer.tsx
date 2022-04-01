import React, { useState } from 'react'
import Modal from './Modal'

export default function Footer(props) {
  const [showSupport, updateShowSupport] = useState(false)

  const handleShow = () => {
    updateShowSupport(!showSupport)
  }

  const supportTxt = 
    <div>
      <p>Stockdle was built by Varun Kumar.</p>
      <a className="support-links" href="https://github.com/varkum/Stockdle"><i className="fa-brands fa-github"></i></a>
      <a className="support-links" href="https://ko-fi.com/varun"><i className="fa-solid fa-mug-hot"></i></a>
      
    </div>
  return (
    <div className="footer">
    <button className="footer-btn" onClick={handleShow}><i className="fa-solid fa-heart"></i></button>Support
    <Modal show={showSupport} handleClose={handleShow} header="Support" content={supportTxt}/>
    </div>                      
  )
}

/*
<a href="https://github.com/varkum/Stockdle"><i className="fa-brands fa-github"></i></a>
*/