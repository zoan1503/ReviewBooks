import React from 'react';
import PropTypes from 'prop-types';

WriteReview.propTypes = {

};

function WriteReview(props) {
    return (
        <div>
            <div classname="startReview">
                <div classname="column6">
                    <img src="image/user3.PNG" />
                </div>
                <div classname="column6" style={{ marginLeft: '20px' }}>
                    <div>
                        Start your review of The Midnight Library
      </div>
                    <div>
                        <div classname="rate">
                            <input type="radio" id="star5" name="rate" defaultValue={5} />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" defaultValue={4} />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" defaultValue={3} />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" defaultValue={2} />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" defaultValue={1} />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        <span style={{ marginBottom: '0%', marginLeft: '20px', marginTop: '20px', fontSize: '15px' }}>
                            <button type="button">Write a review</button></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;