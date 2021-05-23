const db = require('./database')

module.exports = {


    get_all_review_book: (req, res) => {
        id_user = req.body.id_user;
        let sql = 'select book_title, content_review, image_url, author  from review, books where review.id_book = books.id_book and id_user = ?'
        db.query(sql, [id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    get_all_rating_book: (req, res) => {
        id_user = req.body.id_user;
        let sql = 'select book_title, rating_value, image_url, author  from rating, books where rating.id_book = books.id_book and id_user = ?'
        db.query(sql, [id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_all_reaction: (req, res) => {
        id_user = req.body.id_user;
        let sql = 'select reaction_choice, content_review, book_title from reaction, review, books where review.id_book = books.id_book and review.review_id = reaction.review_id and reaction.id_user = ?'
        db.query(sql, [id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_all_user_info: (req, res) => {
        username = req.body.username;
        password = req.body.password;
        let sql = 'select * from users where username = ? and password =?'
        db.query(sql, [username, password], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update_info: (req, res) => {
        let newPassword = req.body.password;
        let newAge = req.body.age;
        let newEmail = req.body.email;
        let newAddress = req.body.address;
        let newFullName = req.body.fullname;
        let id_user = req.body.id_user
        let sql = 'UPDATE users SET password = ?, age = ?, email = ?, address = ?, fullname = ? WHERE id_user = ?'
        db.query(sql, [newPassword, newAge, newEmail, newAddress, newFullName, id_user], (err, response) => {
            console.log(sql)
            if (err) throw err
            res.json({ message: 'Update user success!' })
        })
    },
}