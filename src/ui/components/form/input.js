import React from 'react';

let Input = React.createClass({
    displayName : 'Input',

    propTypes : {
        name                  : React.PropTypes.string.isRequired,
        type                  : React.PropTypes.string,
        className             : React.PropTypes.string,
        disabled              : React.PropTypes.bool,
        componentCSSClassName : React.PropTypes.string,
        placeholder           : React.PropTypes.string,
        value                 : React.PropTypes.any
    },

    getDefaultProps() {
        return {
            componentCSSClassName : 'input',
            placeholder           : null,
            value                 : null,
            className             : null,
            disabled              : false,
            type                  : 'text'
        };
    },

    render()
    {
        let classes = [
            this.props.componentCSSClassName,
            this.props.componentCSSClassName + '--' + this.props.type,
            this.props.className
        ].join(' ');

        return (
            <input
                {...this.props}
                name        = {this.props.name}
                className   = {classes}
                type        = {this.props.type}
                disabled    = {this.props.disabled}
                placeholder = {this.props.placeholder}
                value       = {this.props.value}
            />
        );
    }
});

export default Input;
