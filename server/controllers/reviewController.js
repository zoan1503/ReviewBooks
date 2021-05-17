const util = require('util')
const mysql = require('mysql')
const db = require('./database')

module.exports = {
    add: (req, res) => {
        const content_review = req.body.content_review;
        const id_user = req.body.id_user;
        const id_book = req.body.id_book;

        const insertQuery = "INSERT INTO review (content_review, id_user, id_book) VALUES('"
        db.query(insertQuery + content_review + "', " + id_user + ", " + id_book + ")", (err, results) => {
            if (err) {
                console.log("insert error");
                res.send(err)
            }
            else {
                res.send({ error: false, data: results, message: 'review has been add successfully!' });
            }

        });
    },
    getall: (req, res) => {
        let sql = 'SELECT * FROM review'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    getlast: (req, res) => {
        let id_user = req.body.id_user
        let id_book = req.body.id_book
        let sql = 'SELECT * FROM review where id_user = ? and id_book = ? ORDER BY review_id DESC LIMIT 1'
        db.query(sql, [id_user, id_book], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let review_id = req.body.review_id
        let newReview = req.body.content_review
        let sql = 'UPDATE review SET content_review = ? WHERE review_id = ?'
        db.query(sql, [newReview, review_id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },

    delete: (req, res) => {
        let review_id = req.body.review_id;

        let sql = 'DELETE FROM review WHERE review_id = ?'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            console.log(sql)
            res.json({ message: 'Delete success!' })
        })
    }
}