import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class PageLoader extends Component {
    render() {
        return (
            <div>
                {
                    this.props.pageLoader ? <div className="loader" /> : this.props.children
                }
            </div>
        );
    }
}

const mapStateToProps = ({pageLoader}) =>
    ({
        pageLoader
    });

export default connect(mapStateToProps)(PageLoader);