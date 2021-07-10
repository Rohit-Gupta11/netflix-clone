import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function loadMovies() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        loadMovies()
    }, [fetchUrl])

    return (
        <div>
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => {
                    return (
                        <img className="row-poster"
                            key={movie.id}
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row