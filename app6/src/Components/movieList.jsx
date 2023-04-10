import React from 'react';
import MovieCard from './movieCard';
import  '../style.css';

const MovieList= ({Movie})=>{
    return(
        <div  className="bucket">
           {Movie.map(film=>(<MovieCard  film={film} />))}
        </div>
    )
}
export default MovieList;