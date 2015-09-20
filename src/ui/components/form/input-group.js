import React      from 'react';
import Input      from './input';
import Label      from './label';
import classNames from 'classnames';

let InputGroup = React.createClass({

    displayName : 'InputGroup',

    propTypes : {
        // shared props
        name                 : React.PropTypes.string.isRequired,
        requiredText         : React.PropTypes.string,
        inputElement         : React.PropTypes.oneOf([
            'input'
        ]),
        label                : React.PropTypes.string,
        placeholder          : React.PropTypes.string,
        value                : React.PropTypes.any,
        disabled             : React.PropTypes.bool,
        className            : React.PropTypes.string,
        componentClassName   : React.PropTypes.string,
        type : React.PropTypes.oneOf([
            'date',
            'datetime',
            'datetime-local',
            'date',
            'email',
            'month',
            'number',
            'password',
            'search',
            'tel',
            'text',
            'url',
            'week'
        ])
    },

    getDefaultProps()
    {
        return {
            requiredText                    : null,
            inputElement                    : 'input',
            label                           : null,
            placeholder                     : null,
            value                           : null,
            disabled                        : false,
            className                       : null,
            type                            : 'text'
        };
    },

    getInitialState()
    {
        return {
            isFocused : null
        };
    },

    onFocus()
    {
        this.setState({isFocused : true});
        return this.props.onFocus;
    },

    onBlur()
    {
        this.setState({isFocused : false});
        return this.props.onBlur;
    },


    renderRequiredText()
    {
        if (! this.props.requiredText) {
            return null;
        }

        return (
            <span className='input-group__required'>
                {this.props.requiredText}
            </span>
        );
    },

    render()
    {
        let classes = [
            'input-group',
            this.state.isFocused ? 'input-group--focus' : null,
            this.props.value ? 'input-group--value' : null,
            this.props.className
        ].join(' ').split();

        let inputClasses = [
            'input-group__input',
            this.props.componentClassName
        ];

        return (
            <div className={classes}>
                <Label
                    className       = 'input-group__label'
                    htmlFor         = {this.props.name}
                    text            = {this.props.label}
                />
                <Input
                    {...this.props}
                    className   = {classNames(inputClasses)}
                    name        = {this.props.name}
                    id          = {this.props.name}
                    placeholder = {this.props.placeholder}
                    onFocus     = {this.onFocus}
                    onBlur      = {this.onBlur}
                    value       = {this.props.value}
                    disabled    = {this.props.disabled}
                    type        = {this.props.type}
                />
            </div>
        );
    }

});

export default InputGroup;
