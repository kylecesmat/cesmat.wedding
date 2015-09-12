import React from 'react';
let Link = require('react-router').Link;

let MenuItem = React.createClass({
    displayName : 'MenuItem',

    propTypes : {
        key   : React.PropTypes.any,
        label : React.PropTypes.string,
        route : React.PropTypes.string
    },

    render() {
        return (
            <Link className='menu-item' key={this.props.key} to={this.props.route}>{this.props.label}</Link>
        );
    }
});

export default MenuItem;
