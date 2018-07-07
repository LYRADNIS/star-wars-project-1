import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacterInfo } from './../../actions';
import './index.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                {
                    this.props.characters
                        .map(({name, url}, key) =>
                            <a onClick={ () => getCharacterInfo(url) } key={ key }>{ name }</a>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = ({characters}) =>
    ({
        characters
    });

export default connect(mapStateToProps)(Navbar);