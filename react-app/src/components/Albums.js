import React, { useEffect } from "react"
import { connect } from "react-redux";
import {dataRequested} from '../states/Albums/reducer';
import AlbumCard from './AlbumCard';

const App = function({getData, albums, isLoading, error }) {
    useEffect(() => {
        getData({url: "http://jsonplaceholder.typicode.com/posts"})
    }, []);


    return (
        <>
        <h2> Albumns</h2>
            {
                isLoading ? 
                (<div>loading</div>) :
                (albums.map(album => (<AlbumCard album={album}/>)))
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