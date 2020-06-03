import React from 'react'
import PropTypes from 'prop-types'
import { Image, Item, Rating } from 'semantic-ui-react';


const Book = ({book=undefined}) => {
    return (
        book ? 
        (
            <Item>
            <Item.Image size='tiny' src={book.thumbnail} />
            <Item.Content>
                <Item.Header as='a'>{book.title}</Item.Header>
                <Item.Meta>{book.author}</Item.Meta>
                <Item.Meta>{book.rating}</Item.Meta>
                <Rating defaultRating={book.rating/2} maxRating={5}></Rating>
                <Item.Description>
                    {book.introduction}
                </Item.Description>
                <Item.Extra>{book.link}</Item.Extra>
            </Item.Content>
            </Item>
            
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
        link: PropTypes.string,
        thumbnail: PropTypes.string,
        introduction: PropTypes.string,
        rating: PropTypes.number
    })
};

export default Book;



