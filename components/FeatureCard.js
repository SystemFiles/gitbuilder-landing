import React, { Component } from 'react'
import styles from '../styles/FeatureCard.module.css'

export class FeatureCard extends Component {
	render() {
		return (
			<div className={styles.FeatureCard}>
				<div>{this.props.icon}</div>
				<h2>{this.props.title}</h2>
				<p className={styles.FeatureCardDescription}>{this.props.children}</p>
			</div>
		)
	}
}

export default FeatureCard
