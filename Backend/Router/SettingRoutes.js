const express = require('express')
const CMS_DB = require('../db/CmsDB')

const SettingsRoutes = express.Router()

SettingsRoutes.get('/', (req, res) => {

    CMS_DB.query("SELECT * FROM settings WHERE 1", (err, result) => {
        if (err) {
            console.log("Settings service have some error . \n", err)
        } else {
            res.send(result[result.length - 1])
        }
    })

})



SettingsRoutes.post("/edit" ,  (req , res) => {

    const {site_name , Theme_color} = req.body

    CMS_DB.query(`INSERT INTO settings (id, Theme_color, Site_Name) VALUES (NULL , '${Theme_color}' , '${site_name}')` , (err , result) => {
        if(err) {
            throw err
        } else {
            res.send(result)
        }
    })

})

module.exports = SettingsRoutes