const db = require('./database')

module.exports = {
    add: (req, res) => {
        const content_review = req.body.content_review;
        const id_user = req.body.id_user;
        const id_book = req.body.id_book;
        let insertQuery = "INSERT INTO review (content_review, id_user, id_book) VALUES('?', ?, ?)"
        db.query(insertQuery, [content_review, id_user, id_book], (err, results) => {
            if (err) {
                console.log("insert error: ");
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
        let id_book = req.query.id_book;
        let sql = 'select books.id_book, avgRating, book_title, author, description, image_url, review.review_id, content_review, review.id_user, users.username, likes, dislike, rating_value from books inner join review on books.id_book = review.id_book and books.id_book = ? inner join users on review.id_user = users.id_user join (SELECT review_id, count(case when reaction_choice = 1 then 1 end) as likes, count(case when reaction_choice = 0 then 1 end) as dislike from reaction group by review_id) countt on countt.review_id = review.review_id join (SELECT FORMAT(AVG(rating_value), 1) AS avgRating, count(rating_value) as counting, id_book FROM rating GROUP BY id_book ) rate on rate.id_book = books.id_book left join rating on books.id_book = rating.id_book and users.id_user = rating.id_user'
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