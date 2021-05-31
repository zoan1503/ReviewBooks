import React from 'react';
import PropTypes from 'prop-types';
import './../css/BookInformation.css'
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
BookInformation.propTypes = {
    topBook: PropTypes.object,
};

BookInformation.defaultProps = {
    topBook: {},
}
export default function BookInformation(props) {
    const { topBook } = props;
    return (
        <React.Fragment>
            <div className="nomineeBook column1">
                <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'grey' }}>
                {}
                </div>
                <div>
                    <Link to={'reviewbooks' + topBook.id_book}>
                        <img src={topBook.image_url} style={{ width: '170px', height: '300px' }} />
                    </Link>
                </div>
                <div className="readButton" style={{ textAlign: 'center' }}>

                    <Rating
                        fractions={2}
                        emptySymbol="fa fa-star-o fa high"
                        fullSymbol="fa fa-star fa high"
                        initialRating={topBook && topBook.avgRating}
                    // onClick={(value) => {
                    //     setRating(value)
                    //     console.log(rating)
                    // }}
                    />
                </div>
            </div>
        </React.Fragment>
    );

}