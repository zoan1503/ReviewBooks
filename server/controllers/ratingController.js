const db = require('./database')

module.exports = {
    add: (req, res) => {
        const rating_value = req.body.rating_value;
        const id_user = req.body.id_user;
        const id_book = req.body.id_book;

        const insertQuery = "INSERT INTO rating (rating_value, id_user, id_book) VALUES("
        db.query(insertQuery + rating_value + ", " + id_user + ", " + id_book + ")", (err, results) => {
            if (err) {
                console.log("insert error");
                res.send(err)
            }
            else {
                res.send({ error: false, data: results, message: 'rating has been add successfully!' });
            }

        });
    },
    // Bổ sung
    get_average_and_count_rating_book: (req, res) => {
        let sql = "SELECT book.id_book, book.book_title, book.author, description, book.image_url, rate.avgRating, rate.counting FROM (SELECT FORMAT(AVG(rating_value), 1) AS avgRating, count(rating_value) as counting, id_book FROM rating GROUP BY id_book ) rate JOIN books book ON rate.id_book = book.id_book order by avgRating desc limit 13"
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    get_rating: (req, res) => {
        let id_user = req.body.id_user
        let id_book = req.body.id_book
        let sql = 'SELECT * FROM rating where id_user = ? and id_book = ? '
        db.query(sql, [id_user, id_book], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let newRatingValue = req.body.rating_value
        let rating_id = req.body.rating_id
        let sql = 'UPDATE rating SET rating_value = ? WHERE rating_id = ?'
        db.query(sql, [newRatingValue, rating_id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update rating success!' })
        })
    },
}