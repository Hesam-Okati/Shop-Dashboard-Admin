import React from 'react'
import "./ErrorBox.css"

function ErrorBox({ text }) {
  return (
    <div className='ErrorBox'>
        <h3>{ text }</h3>
    </div>
  )
}

export default ErrorBox