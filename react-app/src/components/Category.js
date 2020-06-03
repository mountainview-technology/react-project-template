import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Books from './Books';

const Category = ({match}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/books`}>Books</Link>
                </li>  
                <li>
                    <Link to={`${match.url}/movies`}>Movies</Link>
                </li>  
                <li>
                    <Link to={`${match.url}/musics`}>Musics</Link>
                </li>  
            </ul>
            <Route 
                path={`${match.path}/:name`}
                render = {
                    ({match}) =>(
                        <div>
                            {match.params.name === 'books' && <Books />}
                            {match.params.name !== 'books' && <h3>{match.params.name}</h3>}
                        </div>
                    )
                }
            />
        </div>
    );
};

export default Category;
