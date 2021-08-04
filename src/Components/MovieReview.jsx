import React, { Component } from 'react';

class MovieReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
        }
    }

    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=20&api-key=1c4Xl5uOwljOzjIMKiBbmfIbRsB1NkZD").then((res) => res.json()).then((movies) => { this.setState({
            movies: movies
        });
        console.log(movies)
    }).catch((err) => {
        console.log(err)
    });
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
