const mysql = require('mysql')

const CMS_DB = mysql.createConnection({
 host:"localhost",
 user: "root",
 password : '',
 database: "cms"  
})

CMS_DB.connect((err , res) => {
    if(err) {
        console.log("The Program have an error Now ." , err)
    } else {
        console.log("Successfully Connected to database .")
    }
})

module.exports = CMS_DB