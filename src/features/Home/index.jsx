import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                {
                    this.props.films
                        .map(({title}, key) =>
                            <div key={ key }>{ title }</div>
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