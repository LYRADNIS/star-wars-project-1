import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from './../../formatting';

class Home extends Component {
    render() {
        return (
            <div>
                {
                    this.props.films
                        .map(({title, release_date}, key) =>
                            <div key={ key }>{ title } { formatDate(release_date) }</div>
                        )
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