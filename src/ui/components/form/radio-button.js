'use strict';

let React       = require('react');
let classNames  = require('classnames');
let Radio       = require('./radio');
let Label       = require('./label');
let Icon        = require('../icon/icon');

let RadioInput = React.createClass({

    displayName : 'RadioInput',

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        name                  : React.PropTypes.string.isRequired,
        checked               : React.PropTypes.bool.isRequired,
        value                 : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired,
        text          : React.PropTypes.string,
        onChange      : React.PropTypes.func,
        onFocus       : React.PropTypes.func,
        onBlur        : React.PropTypes.func,
        className     : React.PropTypes.string,
        icon          : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            colorTheme    : 'primary',
            onChange      : null,
            icon          : 'dot',
            onFocus       : null,
            onBlur        : null,
            className     : null,
            text          : null
        };
    },

    renderLabelText()
    {
        if (this.props.text) {
            return (
                <span className={'radio-button__text'}>{this.props.text}</span>
            );
        }

        return null;
    },

    render()
    {
        let classes = {
            'radio-input'           : true,
            'radio-input--checked'  : this.props.checked,
            'radio-input--disabled' : this.props.disabled
        };
        classes['radio-input--' + this.props.colorTheme] = true;
        classes[this.props.className]                    = this.props.className;

        return (
            <div className='radio-input__group'>
                <Label
                    className = 'radio-input__label'
                    htmlFor   = {this.props.id}
                >
                    <div className={classNames(classes)}>
                        <Icon
                            className = 'radio-input__icon'
                            icon      = {this.props.icon}
                        />
                        <Radio
                            className = 'radio-input__radio'
                            id        = {this.props.id}
                            name      = {this.props.name}
                            value     = {this.props.value}
                            type      = 'radio'
                            checked   = {this.props.checked}
                            onChange  = {this.props.onChange}
                            onFocus   = {this.props.onFocus}
                            onBlur    = {this.props.onBlur}
                            disabled  = {this.props.disabled}
                        />
                    </div>
                    <div className='radio-input__text-container'>
                        {this.renderLabelText()}
                    </div>
                </Label>
            </div>
        );
    }

});

module.exports = RadioInput;
