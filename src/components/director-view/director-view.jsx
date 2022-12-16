import React from 'react';
import PropTypes from 'prop-types';

import {Button, Container, Card} from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {

    render() {
        const { director, onBackClick, movies, movie} = this.props;
        console.log(movie);
        return (
            <Container>
                <Card className="dir-view">
                    <Card.Header className="dir-view-header">Director</Card.Header>
                    <Card.Body className="dir-view-title">{director.Name}</Card.Body>
                    <Card.Body>{director.Bio}</Card.Body>
                    <Card.Body>Birth: {director.Birth}</Card.Body>
                    <Card.Footer>
                    <Button
                        className="dir-view-button"
                        onClick={() => {
                        onBackClick();
                        }}
                    >
                        Back
                    </Button>
                </Card.Footer>
                </Card>
            </Container>
        );

    }

}

DirectorView.proptypes = {
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Birthday: PropTypes.string,
    }).isRequired
};