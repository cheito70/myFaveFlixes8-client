import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image } from "react-bootstrap";

import "./movie-card.scss";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link, Route } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie, setSelectedMovie } = this.props;

        //return <div className="movie-card" onClick={() => onMovieClick(movie)}>{movie.Title}</div>;
        return (
            <Card className="movie-card m-2">
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                </Card.Body>

                <Card.Footer className="card-footer m-1" >
                    <Link to={`/movies/${movie._id}`}>
                        <Button class="open-button" variant="success">Open</Button>
                    </Link>
                    <Link to={`/directors/${movie.Director.Name}`}>
                        <Button class="director-button" variant="link">Director</Button>
                    </Link>
                    <Link to={`/genres/${movie.Genre.Name}`}>
                        <Button class="genre-button" variant="link">Genre</Button>
                    </Link>

                </Card.Footer>

            </Card>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({ 
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired
    }).isRequired,
       onMovieClick: PropTypes.func,
};