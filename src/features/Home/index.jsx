import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Home extends Component {
    formatDate(date) {
        return moment(date).format('dddd, MMMM Do YYYY').toString();
    }

    render() {
        return (
            <div>
                {
                    this.props.films
                        .map(({title, release_date}, key) =>
                            <div key={ key }>{ title } { this.formatDate(release_date) }</div>
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