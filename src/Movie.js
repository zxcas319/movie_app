import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';



function Movie({title,poster,genres,synopsis}){
    return(
            <div className="Movie">
                <div className="Movie_Columns">

                <MoviePoster poster={poster} alt={title}/>
            </div>
            <h1> {title} </h1>
            <div className="Movie_Genres">
                {genres.map((genres,index) => <MovieGenres genres={genres} key={index}/>)}
            </div>
            <div className="Movie_synopsis">
            <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />  
            </div>
            </div>
    )
}

function MovieGenres({genres}){
    return(
        <span className="Movie_Genres">{genres}</span>
    )
    
}

Movie.propTypes={
    title:propTypes.string.isRequired,
    poster:propTypes.string.isRequired,
    genres:propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired

}

MovieGenres.propTypes={
    genres: propTypes.string.isRequired
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes={
    poster:propTypes.string.isRequired
}

export default Movie