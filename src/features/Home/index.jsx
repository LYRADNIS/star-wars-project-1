import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmGrid from './../../components/FilmGrid';

class Home extends Component {
    render() {
        return (
            <div>

                {
                    this.props.films.length > 0

                    ?

                    <FilmGrid films={ this.props.films }></FilmGrid>

                    :

                    <div>NO DATA</div>
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