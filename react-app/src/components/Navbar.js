import React from 'react';
import { Link } from 'react-router-dom';

export default ()=>(
    <div>
    <Link to="/">Home </Link>
    <Link to="/posts">Posts </Link>
    <Link to="/albums">Albums </Link>
    <Link to="/category">Category</Link>
    </div>
);