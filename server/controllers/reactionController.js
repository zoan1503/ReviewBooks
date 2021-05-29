const db = require('./database')

module.exports = {
    add: (req, res) => {
        const reaction_choice = req.body.reaction_choice;
        const id_user = req.body.id_user;
        const review_id = req.body.review_id;

        const insertQuery = "INSERT INTO reaction (reaction_choice, id_user, review_id) VALUES('"
        db.query(insertQuery + reaction_choice + "', " + id_user + ", " + review_id + ")", (err, results) => {
            if (err) {
                console.log("insert error");
                res.send(err)
            }
            else {
                res.send({ error: false, data: results, message: 'reaction has been add successfully!' });
            }

        });
    },
    get_all_like: (req, res) => {
        console.log("reviewid: ", req.query)
        let review_id = req.query.review_id;
        let sql = 'select count(reaction_choice) as likes from reaction where reaction_choice = 1 and review_id = ? group by review_id'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_all_dislike: (req, res) => {
        let review_id = req.query.review_id;
        let sql = 'select count(reaction_choice) as dislike from reaction where reaction_choice = 0 and review_id = ? group by review_id'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    get_all_reaction_1book: (req, res) => {
        let id_user = req.query.id_user
        let id_book = req.query.id_book
        let sql = 'SELECT review.review_id, review.id_book, reaction_choice from books inner join review on books.id_book = review.id_book and books.id_book = ? left join (select reaction_choice, id_user, review_id from reaction where id_user = ?) choice on choice.review_id = review.review_id'
        db.query(sql, [id_book, id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let review_id = req.body.review_id
        let newReaction = req.body.reaction_choice
        let id_user = req.body.id_user
        let sql = 'UPDATE reaction SET reaction_choice = ? WHERE review_id = ? and id_user = ?'
        db.query(sql, [newReaction, review_id, id_user], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },

    delete: (req, res) => {
        let review_id = req.body.review_id;

        let sql = 'DELETE FROM reaction WHERE review_id = ?'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            console.log(sql)
            res.json({ message: 'Delete success!' })
        })
    }
}