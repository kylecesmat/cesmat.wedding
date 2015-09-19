import React from 'react';
import Input from './input';
import Label from './label';

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
            this.props.value ? 'input-group--value' : null,
            this.props.className
        ].join(' ').split();

        let componentClasses = [
            'input-group__input',
            this.props.componentClassName
        ].join(' ').split();

        return (
            <div className={classes}>
                <Label
                    className       = 'input-group__label'
                    htmlFor         = {this.props.name}
                    text            = {this.props.label}
                >
                    <Input
                        {...this.props}
                        className   = {componentClasses}
                        name        = {this.props.name}
                        id          = {this.props.name}
                        placeholder = {this.props.placeholder}
                        value       = {this.props.value}
                        disabled    = {this.props.disabled}
                        type        = {this.props.type}
                    />
                </Label>
            </div>
        );
    }

});

export default InputGroup;
