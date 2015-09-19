'use strict';

let React = require('react');

let Label = React.createClass({

    displayName : 'Label',

    propTypes : {
        htmlFor               : React.PropTypes.string.isRequired,
        componentCSSClassName : React.PropTypes.string,
        text                  : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'label',
            text                  : null
      };
    },

    render()
    {
        let classes = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        return (
            <label
                {...this.props}
                htmlFor   = {this.props.htmlFor}
                className = {classes}
            >
                <span className='label__text'>
                    {this.props.text}
                </span>
                {this.props.children}
            </label>
        );
    }

});

module.exports = Label;
