import React from 'react';

const  Album = ({match, location})=>{
    return (
    <>
    <div>Album</div>
    <div>{location.pathname}</div>
    <div>{match.url}</div>
    <div>{match.path}</div>
    <div>{match.params.id}</div>
    </>
    );
}

export default Album;