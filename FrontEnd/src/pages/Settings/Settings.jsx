import React, { useState } from 'react'
import "./Settings.css"

function Settings() {
  const [InputColorValue , SetInputColorValue] = useState('#000')

  const InputColorHandler = (e) => {
    SetInputColorValue(e.target.value)
    console.log(InputColorValue)
  }

  const SubmitHandler = (e) => {
    // e.preventDefault()
    localStorage.clear()
  alert("Set")
  }
  return (
    <div className='Settings'>
      <form action="http://localhost:3001/api/settings/edit/" method='post' onSubmit={(e) => SubmitHandler(e)} className='Form-Setting'>
        <div className="Setting-left">
          <h5>Change Site Name</h5>
          <input type="text"  className='input-settings' name='site_name' placeholder='Site Name' />
        </div>
        <div className="Setting-right">
            <h5>Theme Color</h5>
            <input type="text" className='input-settings' name='Theme_color'  placeholder='Enter Color Code  (HAX)' onChange={InputColorHandler} value={InputColorValue}/>
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Settings