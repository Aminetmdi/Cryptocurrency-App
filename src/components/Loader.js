import React from 'react';
import './Loader.css'
// GIF 
import spinner from '../gif/spinner.gif'


const Loader = () => {
    return (
        <div className='loading'>
            <img src={spinner} alt='Loading' />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;