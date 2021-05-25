const db = require('./database')

module.exports = {


    searchbook: (req, res) => {

        book_title = req.query.book_title;
        author = req.query.author;
        if (book_title && author) {
            book_title = "%" + book_title + "%";
            author = "%" + author + "%";
            let sql = 'select* from books where book_title like ? and author like ?'
            db.query(sql, [book_title, author], (err, response) => {
                if (err) throw err
                res.json(response)
                console.log(response)
            })
        }
        if (book_title && !author) {
            book_title = "%" + book_title + "%";
            let sql = 'select * from books where book_title like ?'
            db.query(sql, [book_title], (err, response) => {
                if (err) throw err
                res.json(response)
            })
        }
        if (!book_title && author) {
            author = "%" + author + "%";
            let sql = 'select * from books where author like ?'
            db.query(sql, [author], (err, response) => {
                if (err) throw err
                res.json(response)
            })
        }
    },

    get_info_book: (req, res) => {
        let id_book = req.query.id_book
        let sql = 'SELECT * FROM books where id_book = ?'
        db.query(sql, [id_book], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    get_all_book: (req, res) => {
        let sql = 'SELECT * FROM books'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

}