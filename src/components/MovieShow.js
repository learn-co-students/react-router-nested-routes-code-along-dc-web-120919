import React from 'react'

const MovieShow = ({match, movies}) => {

    let movieID = match.params.movieId

    return (
        <div>
            <h3>{movies[movieID].title}</h3>
        </div>
    )
}

export default MovieShow