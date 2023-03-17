import React from 'react'
import styles from './header.module.scss'

const Burger = () => {
	return (
		<>
			<label className={styles.Burger} for="toggle">
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
			</label>
		</>
	)
}
export default Burger