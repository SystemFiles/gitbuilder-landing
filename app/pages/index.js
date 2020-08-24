import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import BuildIcon from '@material-ui/icons/Build'
import CodeIcon from '@material-ui/icons/Code'
import SecurityIcon from '@material-ui/icons/Security'

import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>GitBuilder</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Grid className={styles.navbar} container>
				<Grid className='leftAlign' item xs={12} sm={4}>
					<img src='/assets/gitbuilder-logo.png' alt='gitbuilder-logo' aria-label='gitbuilder logo' />
				</Grid>
				<Grid className='rightAlign' item xs={0} sm={8}>
					<a className={styles.navLink} href='#' rel='noreferrer'>
						Features
					</a>
					<Button varient='secondary' src='#' external>
						Documentation
					</Button>
				</Grid>
			</Grid>

			<Grid className={styles.heroSection} container>
				<Grid item xs={12} sm={6}>
					<div className={styles.heroLeft}>
						<h1>GitBuilder.io</h1>
						<h2>The simple git builder</h2>
						<Grid className={styles.heroButtons} container>
							<Grid item xs={12}>
								<Button src='#' varient='primary' external>
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

			<Grid className={styles.aboutSection} container>
				<Grid item xs={12}>
					<h1>About</h1>
				</Grid>
				<Grid item xs={12}>
					<p>
						This tool, with it's extensible templates library (<span
							className={styles.hightlight}
							style={{ marginRight: '5px' }}
						>
							hosted on GitHub
						</span>), allows developers to get up and running very quickly and without all the boring
						environment and repository setup. gitBuilder.io will start by asking you a couple of basic
						questions about your project and then will give you a detailed breakdown of how it is building
						your project the entire way through.
					</p>
				</Grid>
				<Grid className={styles.aboutFeatures} container item xs={12}>
					<h1>Features</h1>
					<Grid item xs={12}>
						<p>See why GitBuilder.io is worth using!</p>
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={12} sm={4}>
							<FeatureCard icon={<BuildIcon color='secondary' />} title='Easy to use'>
								Installs with One command, works with one command and only requires you to log in once!
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FeatureCard icon={<CodeIcon color='primary' />} title='Open Source'>
								This project and it's associated templates are all open source on GitHub. Make or
								request any changes you would like to see!
							</FeatureCard>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FeatureCard icon={<SecurityIcon color='inherit' />} title='Secure'>
								Gitbuilder.io supports both Basic (user/pass) authentication as well as OAuth
								authentication for secure project generation.
							</FeatureCard>
						</Grid>
					</Grid>
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
