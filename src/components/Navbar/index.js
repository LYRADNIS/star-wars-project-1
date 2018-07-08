import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { clickCharacter } from './../../actions';

class Navbar extends Component {
    assignButtonClass(name) {
        let buttonClass = '';

        const isDarthVader = name === 'Darth Vader'
        const isLukeSkywalker = name === 'Luke Skywalker';
        const isObiwan = name === 'Obi-wan Kenobi';
        const isR2 = name === 'R2-D2';

        if (isDarthVader) {
            buttonClass = 'btn-outline-danger';
        } else if (isLukeSkywalker) {
            buttonClass = 'btn-outline-success';
        } else if (isObiwan) {
            buttonClass = 'btn-outline-primary';
        } else if (isR2) {
            buttonClass = 'btn-outline-warning';
        }

        return buttonClass;
    }

    render() {
        return (
            <div className="standard-row-height border-bottom-black row center-xs middle-xs">
                {
                    this.props.characters
                        .map(({name, url}, key) =>
                            <div className="col-xs" onClick={ () => clickCharacter(url) } key={ key }>
                                <button className={ classnames('btn', this.assignButtonClass(name)) }>{ name }</button>
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