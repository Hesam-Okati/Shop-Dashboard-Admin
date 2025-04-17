const express = require('express')
const CMS_DB = require('../db/CmsDB')

const Mail = express.Router()


Mail.get("/", (req, res) => {

    CMS_DB.query("SELECT * FROM `mail` WHERE 1", (err, result) => {
        if (err) {
            console.log("Your Program have err \n\n\n", err)
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


Mail.post("/add", (req, res) => {

    const { title , descs , auther , date } = req.body

    CMS_DB.query(`INSERT INTO mail VALUES (NULL , "${title}" ,	${descs} , 	"${auther}" , "${date}")`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



Mail.get("/:mailID", (req, res) => {

    const Query = `SELECT * FROM mail WHERE id=${req.params.mailID}`    
    CMS_DB.query(Query , (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

Mail.delete("/remove/:mail_ID", (req, res) => {

    const Query = `DELETE FROM feedback WHERE id=${req.params.mail_ID}`    
    CMS_DB.query(Query , (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


module.exports = Mail