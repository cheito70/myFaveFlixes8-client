import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;

    if (visibilityFilter !== "") {
        filteredMovies = movies.filter((m) => 
        m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
        );
    }

    if (!movies) return <div className='main-view' />;

    return (
        <>
            <Col lg={12} style={{ margin: "1em" }}>
                <VisibilityFilterInput visibilityFilter={visibilityFilter} />
            </Col>
            {filteredMovies.map((m) => (
                <Col lg={3} md={5} key={m._id}>
                    <MovieCard movie={m} />
                </Col>
            ))}    
        </>
    );

}

export default connect(mapStateToProps)(MoviesList);