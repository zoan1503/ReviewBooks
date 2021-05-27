import React from 'react';
import PropTypes from 'prop-types';
import './../css/BookInformation.css'
import Rating from 'react-rating'
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
                    {topBook.counting} votes
                    </div>
                <div>
                    <a href="#"><img src={topBook.image_url} /></a>
                </div>
                <div className="readButton" style={{ textAlign: 'center' }}>
                    <div className="readButton">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">Want to read
                  <span className="caret" /></button>
                            <ul className="dropdown-menu">
                                <li><a href="#">Want to read</a></li>
                                <li><a href="#">Currently read</a></li>
                                <li><a href="#">Read</a></li>
                                <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
                                <div style={{ paddingLeft: '5px' }}>Add New Shelf</div>
                            </ul>
                        </div>
                    </div>
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