const db = require('./database')

module.exports = {
    add: (req, res) => {
        const reaction_choice = req.body.reaction_choice;
        const id_user = req.body.id_user;
        const review_id = req.body.review_id;

        const insertQuery = "INSERT INTO reaction (content_review, id_user, review_id) VALUES('"
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
        let review_id = req.body.review_id;
        let sql = 'select count(reaction_choice)  from reaction where reaction_choice = 1 and review_id = ? group by review_id'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_all_dislike: (req, res) => {
        let review_id = req.body.review_id;
        let sql = 'select count(reaction_choice)  from reaction where reaction_choice = 0 and review_id = ? group by review_id'
        db.query(sql, [review_id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    get_last_reaction: (req, res) => {
        let id_user = req.body.id_user
        let review_id = req.body.review_id
        let sql = 'SELECT * FROM review where id_user = ? and review_id = ? '
        db.query(sql, [id_user, review_id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let review_id = req.body.review_id
        let newReaction = req.body.reaction_choice
        let sql = 'UPDATE reaction SET reaction_choice = ? WHERE review_id = ?'
        db.query(sql, [newReaction, review_id], (err, response) => {
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