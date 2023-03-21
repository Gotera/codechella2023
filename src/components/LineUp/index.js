import React from 'react'
import ContrastedDate from './ContrastedDate';
import styles from './LineUp.module.scss'

const LineUp = () => {
	return (
		<>
			<div className={styles.LineUp__Container} name='teste__teste'>
				<div className={styles.Tittle__div}>
					<h1>&#x2f;Line-Up&#x2f;</h1>
				</div>
				<div className={styles.ContrastedDate__Container}>
					<ContrastedDate date="SÁBADO &#10094;11&#x2f;03&#10095;" />
				</div>
				<div className={styles.Bands__Container}>
					<h3>System of a DOM</h3>
					<ul className={styles.bands__lirst__lineUp}>
						<li>Python Maiden</li>
						<li>Apollo Client 2001</li>
						<li>Bon Java</li>
						<li>NickCallback</li>
					</ul>
					<ul className={styles.bands__second__lineUp}>
						<li>Linkin Promises</li>
						<li>Fullstack Fighters</li>
						<li>Papa React</li>
						<li>Angular in Chains</li>
					</ul>
					<ul className={styles.bands__third__lineUp}>
						<li>Agnostic Front-end</li>
						<li>SlipkNode</li>
						<li>Pink Flutter</li>
						<li>Kiss</li>
					</ul>
				</div>
			</div>
			<div className={styles.LineUp__Container}>
				<div className={styles.Tittle__div}>
					<h1>&#x2f;Line-Up&#x2f;</h1>
				</div>
				<div className={styles.ContrastedDate__Container}>
					<ContrastedDate date="DOMINGO &#10094;12&#x2f;03&#10095;" />
				</div>
				<div className={styles.Bands__Container}>
					<h3>Lana Del Ploy</h3>
					<ul className={styles.bands__lirst__lineUp}>
						<li>Dua Lib</li>
						<li>The Backnd</li>
						<li>CSS Styles</li>
						<li>DJ Query</li>
						<li>ArrayAna Grande</li>
					</ul>
					<ul className={styles.bands__second__lineUp}>
						<li>Miley Cypress</li>
						<li>The Bootstrap Boys</li>
						<li>Json Derulo</li>
						<li>CloudPlay</li>
						<li>Dev Lovato</li>
					</ul>
					<ul className={styles.bands__third__lineUp}>
						<li>Kylie MiLOG</li>
						<li>Jenkins Brothers</li>
						<li>Rubycat Dolls</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default LineUp;