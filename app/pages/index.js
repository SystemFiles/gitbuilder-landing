import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import Button from '../components/Button'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>GitBuilder</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Grid className={styles.navbar} container>
				<Grid className={styles.leftAlign} item xs={4}>
					<img src='/assets/gitbuilder-logo.png' alt='gitbuilder-logo' aria-label='gitbuilder logo' />
				</Grid>
			</Grid>

			<Grid className={styles.heroSection} container>
				<Grid item xs={12} sm={6}>
					<div className={styles.heroLeft}>
						<h1>GitBuilder.io</h1>
						<h2>The simple git builder</h2>
						<Grid className={styles.heroButtons} container>
							<Grid item xs={12}>
								<Button src='#' varient='primary'>
									View Source
								</Button>
								<Button src='#' varient='secondary'>
									<PlayArrowIcon /> Watch Demo
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className={styles.heroRight}>
						<img width='400px' src='/assets/app_thumbnail.png' alt='app thumbnail' />
					</div>
				</Grid>
			</Grid>

			<footer className={styles.footer}>
				<a href='https://sykesdev.ca' target='_blank' rel='noopener noreferrer'>
					Created by <span className={styles.hightlight}>{' Ben Sykes'}</span>
				</a>
			</footer>
		</div>
	)
}
