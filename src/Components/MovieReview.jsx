import React, { Component } from 'react';

class MovieReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
        }
    }
    render() {
        return (
            <div>
                <h1>Awesome Movies to Watch</h1>
            </div>
        );
    }
}

export default MovieReview;