const express = require('express')
const CMS_DB = require('../db/CmsDB')

const feedback = express.Router()


feedback.get("/", (req, res) => {

    CMS_DB.query("SELECT * FROM `feedback` WHERE 1", (err, result) => {
        if (err) {
            console.log("Your Program have err \n\n\n", err)
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


feedback.post("/add", (req, res) => {

    const { title , descs , rate ,	date , feedback_ID } = req.body

    CMS_DB.query(`INSERT INTO feedback VALUES (NULL , "${title}" ,	${descs} , 	${rate} ,	${date}	 , ${feedback_ID}	)`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



feedback.get("/:feedbackID", (req, res) => {

    const Query = `SELECT * FROM feedback WHERE id=${req.params.feedbackID}`    
    CMS_DB.query(Query , (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

feedback.delete("/remove/:fb_ID", (req, res) => {

    const Query = `DELETE FROM feedback WHERE id=${req.params.fb_ID}`    
    CMS_DB.query(Query , (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


module.exports = feedback