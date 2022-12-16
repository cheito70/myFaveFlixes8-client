import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Image } from 'react-bootstrap';

import './movie-view.scss';

import { Link } from 'react-router-dom';


export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick, handleFavorite } = this.props;


        return (            
            <div md={8} className="movie-view">
                <Row>
                    <Col bg={8}>
                <div className="movie-poster mt-3 text-center">
                    <img class="rounded" crossorigin="anonymous" src={movie.ImagePath} alt="movie image" rounded />
                </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                    </Col>
                </Row>
                <Row className="movie-genre">
                <Col>
                <div className="font-weight-bold">Genre: </div>
                <div className="mb-2">
                    <Link to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}</Link>        
                </div>
                    </Col>
                </Row>


                <Row className="movie-director">
                <Col>
                <div className="font-weight-bold">Director: </div>
                <div className="mb-2">
                    <Link to={`/directors/${movie.Director.Name}`}>{movie.Director.Name}</Link>        
                </div>
                    </Col>
                </Row>

                <Col>
                <Button
                    className="my-4 ml-2"
                    variant="outline-primary"
                    onClick={() => handleFavorite(movie._id, "add")}
                >
                    Add to Favorite ❤ Movies
                </Button>
                <Button
                    className="mt-2 mr-2 ml-2 mb-2"
                    variant="warning"
                    onClick={() => {
                    onBackClick();
                    }}
                >
                    Back
                </Button>
                </Col>
                
            </div>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        }).isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};