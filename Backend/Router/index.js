const express = require('express')
const CMS_DB = require('../db/CmsDB')

const index = express.Router()

index.get('/' , (req , res) => {
    res.send({
        massage: "hello from simple server :)"
    })
})

module.exports = index