import React, { useState, useEffect } from 'react'
import Footer from './Footer'

export default function Modal(props) {
  if (!props.show) {
    return null
  }
  
  
  return (
    <div className="modal" onClick={props.handleClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{props.header}</h3>
          </div>
        <div className="modal-body">
          {props.content}
          </div>
        <div className="modal-footer">
          <button className="close-btn" onClick={props.handleClose}>Close</button>
          </div>
      </div>
      </div>
    
  )
}