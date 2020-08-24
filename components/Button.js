import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Button.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'

export class Button extends Component {
	static get propTypes() {
		return {
			src       : PropTypes.string,
			children  : PropTypes.any,
			varient   : PropTypes.string,
			external  : PropTypes.bool,
			useScroll : PropTypes.bool
		}
	}

	static defaultProps = {
		src       : '#',
		varient   : 'primary',
		external  : false,
		useScroll : false
	}

	render() {
		return this.props.useScroll ? (
			<Link
				className={this.props.varient === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary}
				to={this.props.src}
				offset={-70}
				duration={500}
				spy
				smooth
			>
				{this.props.children}
			</Link>
		) : (
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
