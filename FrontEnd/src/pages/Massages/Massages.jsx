import React, { useEffect, useState } from 'react'
import "./Massages.css"
import { Alert } from '@mui/material'

function Massages() {
    const [Massages , SetMassages] = useState([])

    const SetTypeAlret = (item) => {
        if(item.type === "Error") {
            return "error"
        }

        else if(item.type === "Warning") {
            return "warning"
        }

        else if(item.type === "Info") {
            return "info"
        }

        else if(item.type === "Success") {
            return "success"
        }

        return "None"
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/massages") 
            .then(res => res.text())
            .then(data => SetMassages(JSON.parse(data)))

            
    } , [])


  return (
    <div className='Massages'>
        {
            Massages.map(item => (
                <Alert className='Massage' severity={item.type} key={item.id}>
                    {item.content}
                </Alert>
            )) 
        }
    </div>
  )
}

export default Massages