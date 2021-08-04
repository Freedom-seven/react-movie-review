import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
    const movieList = movies.map((data) => {
        return (
            <Movie movie={data} />
        )
    } )
    return (
        <div>
            {movieList}
        </div>
    );
}

export default MovieList;
