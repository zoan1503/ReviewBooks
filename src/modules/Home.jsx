
import React, { useState, useEffect } from 'react';
import BestBook from './BestBook'
import BookInformation from './BookInformation'
import Axios from 'axios'
import './css/screen1_style.css'
export default function Home() {

    const [top5Book, setTop5Book] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:8000/rating/getaverageratingbook")
            .then(response => setTop5Book(response.data));
    }, []);
    return (
        <React.Fragment>
            <div>
                <div className="container">
                    <BestBook bestBook={top5Book[0]} />
                    <hr />
                    <div className="belowContainer">
                        <div className="nominees" style={{ paddingBottom: '20px' }}>
                            <span>All Nominees . 506,978 votes total</span>
                        </div>
                        <div className="allNominees" style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <BookInformation topBook={top5Book[1]} />
                            <BookInformation topBook={top5Book[2]} />
                            <BookInformation topBook={top5Book[3]} />
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <a href="#" style={{ color: 'grey', fontWeight: 'bold', fontSize: '20px' }}>MYSTERY &amp; THRILLER &gt;</a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}