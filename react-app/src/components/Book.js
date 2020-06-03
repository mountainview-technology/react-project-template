import React from 'react'
import PropTypes from 'prop-types'

const Book = ({book=undefined}) => {
    return (
        book ? 
        (
            <div>
                <img src={book.thumbnail} />
                <div>
                    <h3>{book.title}</h3>
                    <div>{ book.author }</div>
                    <div>{book.rating}</div>
                    <div>{book.link}</div>
                    <div>{book.introduction}</div>
                </div>
            </div>
        ) :
        (
            <span>Error happend.</span>
        )
    )
}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        url: PropTypes.string,
        thumbnail: PropTypes.string,
        introduction: PropTypes.string,
        rating: PropTypes.number
    })
};

export default Book;



