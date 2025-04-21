const express = require('express')
const CMS_DB = require('../db/CmsDB')

const msgRoutes = express.Router()

msgRoutes.get('/' , (req , res) => {

    CMS_DB.query(`SELECT * FROM massage WHERE 1` , (err , result) => {
        if(err) {
            console.log("MSG service have some error . \n" , err)
        } else {
            res.send(result)
        }
    })
})

msgRoutes.get("/add" , (req , res) => {
    const { type , content , date } = req.body
    CMS_DB.query(`INSERT INTO massage VALUES (NULL , '${type}' , '${content}' , '${date}' )` , (err) => {
        if(err) 
            console.log(err)
        else
            res.send({ message: "Added" })
    })
})

msgRoutes.delete('/remove/:msgID' , (req , res) => {

    CMS_DB.query(`DELETE FROM massage WHERE id=${req.params.msgID}` , (err) => {
        if(err) {
            console.log("MSG service have some error DELETE. \n" , err)
        } else {
            res.send({
                massage: "Deleted"
            })
        }
    })
})

module.exports = msgRoutes