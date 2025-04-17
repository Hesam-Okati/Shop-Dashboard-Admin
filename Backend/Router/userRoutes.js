const express = require('express')
const CMS_DB = require('../db/CmsDB')

const userRoutes = express.Router()

userRoutes.post("/new" ,  (req , res) => {
    res.send("add")
    const { name , familly , pass , email , avatart } = req.body

    CMS_DB.query(`INSERT INTO user (id, name, familly, avatar, password, email) VALUES (NULL , '${name}' , '${familly}' , '${avatart}' , '${pass}' , '${email}')` , (err , res) => {
        if(err) {
            throw err
        } else {
            return ("Add \n" , res)
        }
    })

})


userRoutes.get("/get-all" ,  (req , res) => {

    CMS_DB.query("SELECT * FROM `user` WHERE 1", (err , result) => {
        if(err) {
            throw err
        } else {
            res.send(JSON.stringify(result))
        }
    })

})

userRoutes.get("/:userID" , (req , res) => {
    const { userID } = req.body
    const Query = `SELECT * FROM user WHERE id=${userID};`

    CMS_DB.query(Query , (err , result) => {
        if (err)
            res.send("ERROR" , err)

        else
            res.send(result)
    })
})

userRoutes.delete("/remove/:userID" , (req , res) => {
    const userID = req.params.userID
    const Query = `DELETE FROM user WHERE id=${userID};`

    CMS_DB.query(Query , (err) => {
        if (err)
            res.send("ERROR" , err)

        else
            res.send("Deleted")
    })
})


userRoutes.put("/edit/:userID" , (req , res) => {
    const { name , familly , avatar , password , email } = req.body
    const UserID = req.params.userID
    const Query = `UPDATE user SET  name='${name}', familly='${familly}', avatar='${avatar}', password='${password}', email='${email}' WHERE id=${UserID}`

    CMS_DB.query(Query , (err) => {
        if (err)
            res.send("ERROR" , err)

        else
            res.send("Deleted")
    })
})

module.exports = userRoutes