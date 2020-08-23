import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Button.module.css'

export class Button extends Component {
	static get propTypes() {
		return {
			src      : PropTypes.string,
			children : PropTypes.string,
			varient  : PropTypes.string
		}
	}

	static defaultProps = {
		src     : '#',
		varient : 'primary'
	}

	render() {
		return (
			<a
				className={this.props.varient === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary}
				target='_blank'
				rel='noopener noreferrer'
				href={this.props.src}
			>
				{this.props.children}
			</a>
		)
	}
}

export default Button
