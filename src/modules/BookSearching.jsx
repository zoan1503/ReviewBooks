import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import BookInformation from './componentHome/BookInformation'
export default function BookSearching() {
    const [listBook, setListBook] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function changeValue(e) {
        setTitle(e.target.value)
        console.log(title)
    }
    function changeValue2(e) {
        setAuthor(e.target.value)
    }
    async function submit(e) {
        e.preventDefault();
        await Axios.get('http://localhost:8000/search/searchbook', {
            params: {
                "book_title": title,
                "author": author
            }
        })
            .then(response => setListBook(response.data));
    }
    return (
        <React.Fragment>
            <form action="" method="POST" role="form">
                <legend>Tìm kiếm sách</legend>

                <div class="form-group">
                    <label for="">Tiêu đề sách</label>
                    <input type="text" class="form-control" id="" placeholder="Nhập tiêu đề sách" onChange={changeValue} />
                </div>
                <div class="form-group">
                    <label for="">Tác giả</label>
                    <input type="text" class="form-control" id="" placeholder="Nhập tên tác giả" onChange={changeValue2} />
                </div>

                <button type="submit" class="btn btn-primary" onClick={submit}>Tìm kiếm</button>
            </form>
            
            <hr />
            {listBook.map(list => (<BookInformation topBook={list} />))}
        </React.Fragment>




    );
}
