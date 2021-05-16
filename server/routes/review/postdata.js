var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var cors = require('cors');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123321",
    database: 'reviewbook'
});
// router.use(cors({
//     origin: 'http://localhost:4000',
//     credentials: true
// }))
router.post('/', function (req, res) {

    const content_review = req.body.content_review;
    const id_user = req.body.id_user;
    const id_book = req.body.id_book;

    const insertQuery = "INSERT INTO review (content_review, id_user, id_book) VALUES('"
    con.query(insertQuery + content_review + "', " + id_user + ", " + id_book + ")", (err, results) => {
        if (err) {
            console.log("insert error");
            res.send(err)
        }
        else {
            res.send({ error: false, data: results, message: 'review has been add successfully!' });
        }

    });
});

module.exports = router;
