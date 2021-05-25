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
    get_all_review_1user: (req, res) => {
        let id_user = req.body.id_user;
        let sql = 'SELECT * FROM review where id_user = ?'
        db.query(sql, [id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_all_review_1book: (req, res) => {
        console.log(req.query)
        let id_book = req.query.id_book;
        let sql = 'select books.id_book, book_title, author, description, image_url, review_id, content_review, review.id_user from books inner join review on books.id_book = review.id_book and review.id_book = ?'
        db.query(sql, [id_book], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    getlast: (req, res) => {

        let review_id = req.query.review_id
        let sql = 'SELECT fullname, users.id_user FROM users, review where review.id_user = users.id_user and review_id = ?'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            res.json(response)
            console.log(response)
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