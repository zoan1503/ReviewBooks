import React from 'react';
import PropTypes from 'prop-types';
import './../css/screen2_style.css'
TopReview.propTypes = {

};

function TopReview(props) {
    return (
        <div>
            <div classname="reviewUser" style={{ marginTop: '20px' }}>
                <div classname="userImage column7">
                    <img src="image/user4.PNG" />
                </div>
                <div classname="detailReview column7">
                    <div>
                        <span><a>Selius Megande</a></span>
                        <span style={{ color: 'grey' }}> rated it</span>
                        <span>
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                        </span>
                        <span>.</span>
                        <span>review of another edition</span>
                        <span>Aug 21,2020</span>
                    </div>
                    <div>
                        Okay! No more words! This is one of the best sci-fi dances with fantasy which carries
                        additional philosophic vibes novel of the year! I LOVED IT! ( this is not kind of toasting
                        for the book and raising your glass kind of loving it. This is more like climbing at the top
                        of the roof and declaring your love by shouting and howling to the moon kind of love. If you
                        read the song lyrics of “ Howl” at the book you may probably understand why I feel so
        enthusiastic and why I’m writing a high volume revi<span><a>...more</a></span>
                    </div>
                    <div>
                        <span>
                            2176 likes
        </span>
                        <span>.</span>
                        <span>
                            <button type="button">Like</button>
                        </span>
                        <span>.</span>
                        <span>
                            <a> see review</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopReview;