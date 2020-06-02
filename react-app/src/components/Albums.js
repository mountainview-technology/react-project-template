import React, { useEffect } from "react"
import { connect } from "react-redux";
import {dataRequested} from '../states/Albums/reducer';
import AlbumCard from './AlbumCard';
import styled from 'styled-components';
import { Link,Route } from 'react-router-dom';
import Album from "./Album";

const AlbumsTitle = styled.h2`
background-color: lightgray;
box-shadow: 0 2px .25rem #B6B6B6;
margin: 1.25rem .625rem 0;
color: darkgreen
`;

const App = function({getData, albums, isLoading, error, match }) {
    useEffect(() => {
        getData({url: "http://jsonplaceholder.typicode.com/posts"})
    }, []);


    return (
        <>
            <AlbumsTitle> Albumns</AlbumsTitle>
            {
                isLoading ? 
                (<div>loading</div>) :
                (albums.map(album => (<Link key={`${match.url}/${album.id}`} to={`${match.url}/${album.id}`}><AlbumCard album={album} /></Link>)))
            }
        </>
    );
};

const mapStateToProps = ({albums}) => {
    return {
        albums: albums.albums,
        isLoading: albums.isLoading,
        error: albums.error
    }
}

const Albums = connect(mapStateToProps, {getData: dataRequested})(App);

export default Albums;