const express = require('express')
const CMS_DB = require('../db/CmsDB')

const sales = express.Router()

sales.get("/" , (req , res ) => {
    const Query = `SELECT * FROM sale WHERE 1`
    CMS_DB.query(Query , (err , result) => {
        if(err)
            console.log(err)

        else 
            res.send(result)
    })
})

sales.get("/:sale_ID" , (req , res ) => {
    const Query = `SELECT * FROM sale WHERE id=${req.params.sale_ID}`
    CMS_DB.query(Query , (err , result) => {
        if(err)
            console.log(err)

        else 
            res.send(result)
    })
})


sales.post("/add" , (req , res) => {
    const { product_ID  , date , count , color } = req.body
    const Query = `INSERT INTO sale  VALUES (NULL , '${product_ID}' , '${date}' , '${count}' , '${color}')`

    CMS_DB.query(Query , (err) => {
        if(err)
            console.log(err)

        else 
            res.send("Add Order :)")
    })
})

sales.put("/edit/:sale_ID" , (req , res) => {
    const { product_ID  , date , count , color } = req.body
    const Query = `UPDATE sale SET id=NULL , product_ID='${product_ID}', date='${date}', count='${count}', color='${color}' WHERE id=${req.params.sale_ID}` 

    CMS_DB.query(Query , (err) => {
        if(err)
            console.log(err)

        else 
            res.send("Edit Order :)")
    })
})



module.exports = sales