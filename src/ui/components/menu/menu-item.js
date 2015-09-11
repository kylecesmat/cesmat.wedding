import React from 'react';
import Link  from 'react-router';

let MenuItem = React.createClass({
    displayName : 'MenuItem',

    propTypes : {
        key   : React.PropTypes.any,
        label : React.PropTypes.string,
        route : React.PropTypes.string
    },

    render() {
        return (
            <div className='menu-item' key={this.props.key}>
                <Link to={this.props.route}>{this.props.label}</Link>
            </div>
        );
    }
});

export default MenuItem;
