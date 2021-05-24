import React from 'react';
import PropTypes from 'prop-types';

RecommendBook.propTypes = {

};

function RecommendBook(props) {
    return (
        <div>
            <div classname="rightContainer column8">
                <div classname="bigBox shareGroup">
                    <div classname id="shareButton" style={{ float: 'left', display: 'table-cell', verticalAlign: 'middle', margin: '5px' }}>
                        <span id="collumn">
                            <img style={{ width: '18px', height: '18px' }} src="image/sharearrow.png" />
                        </span>
                        <a href="#" style={{ color: '#00635D', textDecoration: 'none', fontFamily: '"Lato", "Helvetica Neue", "Helvetica", sans-serif' }}>Share </a>
                    </div>
                    <div id="iconSocialNetwork">
                        <button style={{ border: 'none', backgroundColor: 'transparent' }}><img style={{ width: '28px', height: '28px' }} src="image/facebook.png" /></button>
                        <button style={{ border: 'none', backgroundColor: 'transparent' }}><img style={{ width: '28px', height: '28px' }} src="image/twitter1.PNG" /></button>
                        <button style={{ border: 'none', backgroundColor: 'transparent' }}><img style={{ width: '28px', height: '28px' }} src="image/pinterest.png" /></button>
                    </div>
                </div>
                <div classname="bigBox recommendItBar">
                    <a classname=" greyText" data-title="The Midnight Library" data-image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297._SY75_.jpg" href="#">Recommend It</a>
                    <span classname="greyText">&nbsp;|&nbsp;</span>
                    <a classname="greyText" href="/book/stats?id=52578297-the-midnight-library">Stats</a>
                    <span classname="greyText">&nbsp;|&nbsp;</span>
                    <a classname="greyText" href="/user_status/book/52578297-the-midnight-library">Recent Status Updates
    </a>
                </div>
                <div classname="bigBox relatedworks">
                    <h2 classname="brownBackground " style={{ color: '#382110', fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Readers also enjoyed
    </h2>
                    <div classname="bigBoxBody">
                        <div classname="bigBoxContent ">
                            <div classname="bookCarousel">
                                <div classname="carouselRow" style={{ width: '3600px' }}>
                                    <ul>
                                        <li classname="cover" id="bookCover_26032912">
                                            <a href="https://www.goodreads.com/book/show/26032912-the-queen-of-nothing"><img alt="The Queen of Nothing (The Folk of the Air, #3)" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553624975l/26032912._SX98_.jpg" />
                                            </a>
                                        </li>
                                        <li classname="cover" id="bookCover_23197306">
                                            <a href="https://www.goodreads.com/book/show/23197306-no-better-friend"><img alt="No Better Friend: One Man, One Dog, and Their Extraordinary Story of Courage and Survival in WWII" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1418771587l/23197306._SX98_.jpg" />
                                            </a>
                                        </li>
                                        <li classname="cover" id="bookCover_52309313">
                                            <a href="https://www.goodreads.com/book/show/52309313-the-invisible-women-s-society"><img alt="The Invisible Women's Society" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566523316l/52309313._SX98_SY160_.jpg" />
                                            </a>
                                        </li>
                                        <li classname="cover" id="bookCover_50359667">
                                            <a href="https://www.goodreads.com/book/show/50359667-confessions-of-a-forty-something-f-k-up"><img alt="Confessions of a Forty-Something F**k Up: The Funniest WTF AM I DOING?! Novel of the Year" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579541382l/50359667._SY160_.jpg" />
                                            </a>
                                        </li>
                                        <li classname="cover" id="bookCover_52342376">
                                            <a href="https://www.goodreads.com/book/show/52342376-to-the-woman"><img alt="To the Woman" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584096930l/52342376._SX98_.jpg" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div classname="navButton navButtonPrev initiallyHidden">
                                    <div classname="navButtonArrow sliderArrowPrev" />
                                </div>
                                <div classname="navButton navButtonNext">
                                    <div classname="navButtonArrow sliderArrowNext" />
                                </div>
                            </div>
                            <a classname="actionLink right seeMoreLink" href="https://www.goodreads.com/book/similar/74043794-the-midnight-library">See similar
          books…</a>
                        </div>
                    </div>
                </div>
                <div classname=" bigBox genres">
                    <h2 classname="brownBackground">
                        <a href="/work/shelves/74043794">Genres</a>
                    </h2>
                    <div classname="bigBoxContent">
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/fiction">Fiction</a>
                            </div>
                            <div classname="right">
                                <a title="5206 people shelved this book as 'fiction'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=fiction">5,206
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/fantasy">Fantasy</a>
                            </div>
                            <div classname="right">
                                <a title="3643 people shelved this book as 'fantasy'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=fantasy">3,643
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/contemporary">Contemporary</a>
                            </div>
                            <div classname="right">
                                <a title="1114 people shelved this book as 'contemporary'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=contemporary">1,114
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/audiobook">Audiobook</a>
                            </div>
                            <div classname="right">
                                <a title="922 people shelved this book as 'audiobook'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=audiobook">922
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/magical-realism">Magical
            Realism</a>
                            </div>
                            <div classname="right">
                                <a title="723 people shelved this book as 'magical-realism'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=magical-realism">723
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/adult">Adult</a>
                            </div>
                            <div classname="right">
                                <a title="616 people shelved this book as 'adult'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=adult">616
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/science-fiction">Science
            Fiction</a>
                            </div>
                            <div classname="right">
                                <a title="538 people shelved this book as 'science-fiction'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=science-fiction">538
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/health">Health</a>
          &gt;
          <a href="/genres/mental-health">Mental
            Health</a>
                            </div>
                            <div classname="right">
                                <a title="477 people shelved this book as 'mental-health'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=mental-health">477
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList ">
                            <div classname="left">
                                <a href="/genres/adult-fiction">Adult
            Fiction</a>
                            </div>
                            <div classname="right">
                                <a title="358 people shelved this book as 'adult-fiction'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=adult-fiction">358
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                        <div classname="elementList elementListLast">
                            <div classname="left">
                                <a href="/genres/writing">Writing</a>
          &gt;
          <a href="/genres/books-about-books">Books
                                About
            Books</a>
                            </div>
                            <div classname="right">
                                <a title="354 people shelved this book as 'books-about-books'" rel="nofollow" href="/shelf/users/52578297-the-midnight-library?shelf=books-about-books">354
            users</a>
                            </div>
                            <div classname="clear" />
                        </div>
                    </div>
                    <a classname="actionLink right seeMoreLink" href="/book/shelves/52578297-the-midnight-library">See top
      shelves…</a>
                    <div classname="clear" />
                </div>
                <div classname="bigBox aboutAuthor">
                    <h2 classname="brownBackground">
                        <a href="/author/show/76360.Matt_Haig">About Matt Haig</a>
                    </h2>
                    <div classname="bigBoxContent">
                        <div classname="bookAuthorProfile__topContainer">
                            <div classname="bookAuthorProfile__photoContainer">
                                <a href="/author/show/76360.Matt_Haig">
                                    <div classname="bookAuthorProfile__photo">
                                        <img src="image/matthaig.jpg" />
                                    </div>
                                </a>
                            </div>
                            <div classname="bookAuthorProfile__widgetContainer">
                                <div classname="bookAuthorProfile__name">
                                    <a href="/author/show/76360.Matt_Haig">Matt Haig
            </a>
                                </div>
                                <div classname="goodreadsAuthorBadge" />
                                <div classname="bookAuthorProfile__followerCount">
                                    16,774 followers
          </div>
                                <div classname="authorFollowButtonContainer">
                                    <button name="button" type="button">Follow Author</button>
                                </div>
                            </div>
                        </div>
                        <div classname="bookAuthorProfile__about">
                            <span id="freeTextContainer">Matt Haig was born in Sheffield,
                            England in1975. He writes books for both adults and children, often blending the worlds of
                            domestic
                            reality and outright fantasy, with a quirky twist. His bestselling novels are translated
                            into 28 languages. The Guardian has described his writing as 'delightfully weird'
                            and the
                            New York Times has called him 'a novelist of great talent' whose writing is
          'funny,rive</span>
                            <span id="freeText" style={{ display: 'none' }}>Matt Haig was born in Sheffield,
                            England in1975. He writes books for both adults and children, often blending the
                            worlds of domestic reality and outright fantasy, with a quirky twist. His bestselling
                            novels are translated into 28 languages. The Guardian has described his writing as
                            'delightfully weird' and the New York Times has called him 'a novelist of great talent'
                            whose writing is
                            'funny, riveting and heartbreaking'.
          <br /> <br />
          His novels for adults are The Last Family in England, narrated by a labrador and optioned
          for film by Brad Pitt;
          The Dead Fathers Club (2006), an update of Hamlet featuring an 11-year-old boy; The
          Possession of Mr Cave (2008), about a
          man obsessed with his daughter's safety, and The Radleys (2010) which won Channel 4's TV
          Book Club
          public vote and was shortlisted for a Galaxy National Book Award (UK). The film rights to
          all
          his adult novels have been sold. His next adult novel is The Humans (2013).
          <br /> <br />
          His multi-award winning popular first novel for children, Shadow Forest, was published in
          2007 and its
          sequel, The Runaway Troll, in 2009. His most recent children's novel is To Be A Cat
          (2012).</span>
                            <a href="#" onclick="swapContent($(this));; return false;" style={{ color: '#00635d', textDecoration: 'none' }}>...more</a>
                        </div>
                    </div>
                </div>
                <div classname="bigBox authorBook">
                    <h2 classname="brownBackground"><a href="/author/list/76360.Matt_Haig">Books by Matt Haig</a></h2>
                    <div classname="bigBoxContent">
                        <div classname="bodyBook">
                            <div classname="book">
                                <a href="/book/show/16130537-the-humans"><img alt="The Humans" title="The Humans" width={50} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353739654l/16130537._SX98_.jpg" /></a>
                            </div>
                            <div classname="book">
                                <a href="/book/show/45152372-how-to-stop-time"><img alt="How to Stop Time" title="How to Stop Time" width={50} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555966301l/45152372._SX98_.jpg" /></a>
                            </div>
                            <div classname="book">
                                <a href="/book/show/25733573-reasons-to-stay-alive"><img alt="Reasons to Stay Alive" title="Reasons to Stay Alive" width={50} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453057036l/25733573._SX98_.jpg" /></a>
                            </div>
                            <div classname="book">
                                <a href="/book/show/40404801-notes-on-a-nervous-planet"><img alt="Notes on a Nervous Planet" title="Notes on a Nervous Planet" width={50} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539107959l/40404801._SX98_.jpg" /></a>
                            </div>
                            <div classname="book">
                                <a href="/book/show/7989160-the-radleys"><img alt="The Radleys" title="The Radleys" width={50} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1271413639l/7989160._SX98_.jpg" /></a>
                            </div>
                        </div>
                        <div classname="moreLink">
                            <a classname="actionLink" href="/author/list/76360.Matt_Haig">More…</a>
                        </div>
                    </div>
                </div>
                <div classname="bigBox articles">
                    <h2 classname="brownBackground " style={{ color: '#382110', fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Articles featuring this book
    </h2>
                    <div classname="news_item">
                        <div>
                            <a href="https://www.goodreads.com/blog/show/2077-readers-top-40-book-club-picks?ref=book-show">
                                <img classname="newsPreview__newsImage" src="https://images.gr-assets.com/blogs/1619197745p8/2077.jpg" /></a>
                        </div>
                        <div classname="news_textSection">
                            <a classname="news__newsHeader" href="https://www.goodreads.com/blog/show/2077-readers-top-40-book-club-picks?ref=book-show" data-reactid=".ehm3k684wq.1:$kca=2//blog/amzn1=1gr=1blog=1v3=1geGvrY5V4t1qgsC_.1.0.0">Readers'
          Top 40 Book Club Picks </a>
                        </div>
                        <div classname="news__excerpt">
                            What will you do when it's your turn to pick your book club's next read? Well, this
        is what you won't do: panic. Why not? Because we've dug...</div>
                        <div classname="news__readMore">
                            <a href="https://www.goodreads.com/blog/show/2077-readers-top-40-book-club-picks?ref=book-show">Read
                            more...
        </a>
                        </div>
                        <div classname="news__likesAndComments">
                            <span>87 likes</span>
                            <span>· </span>
                            <span>19 comments</span>
                        </div>
                    </div>
                </div>
                <div classname="bigBox trivia">
                    <h2 classname="brownBackground">
                        <a href="/trivia/work/74043794-the-midnight-library">Trivia About The Midnight Library </a>
                    </h2>
                    <div classname="bigBoxContent">
                        <div classname="mediumText">14 trivia questions<br /></div>
                        <a classname="actionLink" style={{ float: 'right' }} href="/trivia/work/74043794-the-midnight-library">More
        quizzes &amp; trivia...</a>
                    </div>
                </div>
                <div classname="bigBox quotes">
                    <h2 classname="brownBackground">
                        <a href="/work/quotes/74043794-the-midnight-library">Quotes from The Midnight Library</a>
                    </h2>
                    <div classname="bigBoxContent ">
                        <div classname="stacked" tyle="padding-bottom:15px">
                            <span classname="readable">“It is easy to mourn the lives we aren't living. Easy to
                            wish we'd developed other other talents, said yes to different offers. Easy to wish we'd
                            worked harder, loved better, handled our finances more astutely, been more popular, stayed
                            in the
          band, gone to Australia, said yes to the coffee or done more bloody yoga.<br />It takes no
          effort
          to miss the friends we didn't make and the work we didn't do the people we didn't do and the
          people we didn't marry and the children we didn't have. It is not difficult to see yourself
          through
          the lens of other people, and to wish you were all the different kaleidoscopic versions of
          you
          they wanted you to be. It is easy to regret, and keep regretting, ad infinitum, until our
          time runs
          out.<br />
          But it is not lives we regret not living that are the real problem. It is the regret
          itself. It's the regret that makes us shrivel and wither and feel like our own and other
          people's
          worst enemy.<br />
          We can't tell if any of those other versions would of been better or
          worse. Those lives are happening, it is true, but you are happening as well, and that is the
          happening we have to focus on.”</span>
                            <nobr>
                                —
          <a classname="actionLinkLite" href="/quotes/10412725-it-is-easy-to-mourn-the-lives-we-aren-t-living">597
            likes</a>
                            </nobr>
                        </div>
                        <div classname="stacked" tyle="padding-bottom:15px">
                            <span classname="readable">“If you aim to be something you are not, you will always
                            fail. Aim to be you. Aim to look and act and think like you. Aim to be the truest version of
                            you.
                            Embrace that you-ness. Endorse it. Love it. Work hard at it. And don't give a second thought
                            when
          people mock it or ridicule it. Most gossip is envy in disguise.”</span>
                            <nobr>
                                —
          <a classname="actionLinkLite" href="/quotes/10398147-if-you-aim-to-be-something-you-are-not-you">440
                                likes
          </a>
                            </nobr>
                        </div>
                        <a classname="actionLink" style={{ float: 'right' }} href="/work/quotes/74043794-the-midnight-library">More
        quotes…</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RecommendBook;