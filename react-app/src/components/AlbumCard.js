import React from 'react';
import styled from 'styled-components';
import styles from './AlbumCard.module.scss';

const AlbumCard = ({album}) => {
    return (
        <div className={styles.card}>
            <div>{album.title}</div>
        </div>
    );
};

export default AlbumCard;