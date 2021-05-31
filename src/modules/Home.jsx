import React, { useState, useEffect } from 'react';
import BestBook from './componentHome/BestBook'
import BookInformation from './componentHome/BookInformation'
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
                    <div>
                        <h1>Best Rating Book</h1>
                        <div className="topScreen">
                            <div className="column3"><span></span></div>
                        </div>
                    </div>
                    <BestBook bestBook={top5Book[0]} />
                    <hr />
                    <div className="belowContainer">
                        <div className="nominees" style={{ paddingBottom: '20px' }}>
                            <span>Top 12 Best Rating Book</span>
                        </div>
                        <div className="allNominees" style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <BookInformation topBook={top5Book[1]} />
                            <BookInformation topBook={top5Book[2]} />
                            <BookInformation topBook={top5Book[3]} />
                            <BookInformation topBook={top5Book[4]} />
                            <BookInformation topBook={top5Book[5]} />
                            <BookInformation topBook={top5Book[6]} />
                            <BookInformation topBook={top5Book[7]} />
                            <BookInformation topBook={top5Book[8]} />
                            <BookInformation topBook={top5Book[9]} />
                            <BookInformation topBook={top5Book[10]} />
                            <BookInformation topBook={top5Book[11]} />
                            <BookInformation topBook={top5Book[12]} />
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <a href="#" style={{ color: 'grey', fontWeight: 'bold', fontSize: '20px' }}></a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}