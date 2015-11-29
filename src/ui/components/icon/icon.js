'use strict';

let React = require('react');

module.exports = React.createClass({

    displayName : 'Icon',

    propTypes : {
        icon : React.PropTypes.string.isRequired,
        rotate : React.PropTypes.oneOf([
            0,
            45,
            90,
            180,
            270
        ]),
        className  : React.PropTypes.string,
        onClick : React.PropTypes.func
    },

    getDefaultProps()
    {
        return {
            size       : null,
            rotate     : 0,
            className  : null
        };
    },

    render()
    {
        let Icon,
            classes,
            rotationClass;

        Icon = require('./icons/' +  this.props.icon);

        rotationClass = 'icon--rotate-' + this.props.rotate;

        classes = [
            'icon',
            rotationClass,
            this.props.className
        ].join(' ').trim();

        return (
            <span className={classes} onClick={this.props.onClick}>
                <Icon />
            </span>
        );
    }
});
