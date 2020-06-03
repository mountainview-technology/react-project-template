import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { Image, Item, Rating } from 'semantic-ui-react';
const Component = ({books}) =>{
    return (
        <>
        <h3>Books</h3>
        <Item.Group>
        {
            books.map(book => (<Book key={book.title} book={book} />))
        }
        </Item.Group>
        </>
    );
};

const mapStateToProps = ({books}) => {
    return {
        books: books.data
    }
};

const Books = connect(
    mapStateToProps
)(Component);

export default Books;