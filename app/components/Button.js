import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Button.module.css'

export class Button extends Component {
	static get propTypes() {
		return {
			src      : PropTypes.string,
			children : PropTypes.string,
			varient  : PropTypes.string,
			external : PropTypes.bool
		}
	}

	static defaultProps = {
		src      : '#',
		varient  : 'primary',
		external : false
	}

	render() {
		return (
			<a
				className={this.props.varient === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary}
				target={this.props.external ? '_blank' : null}
				rel='noopener noreferrer'
				href={this.props.src}
			>
				{this.props.children}
			</a>
		)
	}
}

export default Button
