import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickCharacter } from './../../actions';

class Navbar extends Component {
    render() {
        return (
            <div className="standard-row-height border-bottom-black row center-xs middle-xs">
                {
                    this.props.characters
                        .map(({name, url}, key) =>
                            <div className="col-xs" onClick={ () => clickCharacter(url) } key={ key }>
                                { name }
                            </div>
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