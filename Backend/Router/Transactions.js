const { Router } = require("express")
const CMS_DB = require("../db/CmsDB")


const Transactions = Router()

Transactions.get("/" , (req , res) => {
    const Query = `SELECT * FROM transactions WHERE 1`

    CMS_DB.query(Query , (err , result) => {
        if(err)
            throw err

        else
            res.send(result)
    })
})


Transactions.get("/:Transactions_id" , (req , res) => {
    const Query = `SELECT * FROM transactions WHERE id=${req.params.Transactions_id}`

    CMS_DB.query(Query , (err , result) => {
        if(err)
            throw err

        else
            res.send(result)
    })
})

Transactions.post("/add" , (req , res) => {
    const {Transaction_ID, Customer, Payment_Method, date, Amount, Status} = req.body
    const Query = `INSERT INTO transactions VALUES (NULL , '${Transaction_ID}' , "${Customer}" , "${Payment_Method}" , "${date}" , "${Amount}" , "${Status}" )`


    CMS_DB.query(Query , (err) => {
        if(err)
            console.log(err)

        else
            res.send("Transaction Inserted")
    })
})

Transactions.delete("/remove/:Transactions_id" , (req , res) => {
    const Query = `DELETE FROM transactions WHERE id=${req.params.Transactions_id}`

    CMS_DB.query(Query , (err) => {
        if(err)
            throw err

        else
            res.send("Transaction deleted")
    })
})


Transactions.put("/edit/:Transactions_id" , (req , res) => {
    const {Transaction_ID, Customer, Payment_Method, date, Amount, Status} = req.body
    const Query = `UPDATE transactions SET id=NULL , Transaction_ID='${Transaction_ID}', Customer='${Customer}', Payment_Method='${Payment_Method}', date='${date}', Amount='${Amount}', Status='${Status}' WHERE id=${req.params.Transactions_id}`

    CMS_DB.query(Query , (err) => {
        if(err)
            throw err

        else
            res.send("Edit Transaction")
    })
})


module.exports = Transactions