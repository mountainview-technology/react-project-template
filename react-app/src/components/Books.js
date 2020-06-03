import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const Component = ({books}) =>{
    return (
        <>
        <h3>Books</h3>
        {
            books.map(book => (<Book book={book} />))
        }
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