import React from 'react';
import './button.scss'


export const Button = (props) => {
    var classNames = require('classnames');

    var btnClass = classNames(
        'button',
        { 'button__loading': props.loading },
        `button__${props.type}`,
        `button__${props.size}`,
        { 'button__outlined': props.outlined },
        { 'button__text': props.text }
    )

    return (
        <button
            className={btnClass}
            onClick={props.onClick}
            disabled={props.disabled}>
            <img alt={props.content} className='button__icon' src={props.icon} />
            <p className='button__content'>{props.content}</p>
        </button>
    )
}

Button.defaultProps = {
    type: 'primary',
    size: 'large'
}