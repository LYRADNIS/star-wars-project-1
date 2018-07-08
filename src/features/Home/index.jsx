import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmGrid from './../../components/FilmGrid';
import EmptyFilms from './../../components/EmptyFilms';

class Home extends Component {
    render() {
        return (
            <div>

                {
                    this.props.films.length > 0 ? <FilmGrid films={ this.props.films } /> : <EmptyFilms />
                }

            </div>
        );
    }
}

const mapStateToProps = ({films}) =>
    ({
        films
    });

export default connect(mapStateToProps)(Home);