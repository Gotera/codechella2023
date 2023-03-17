import React from 'react'
import styles from './header.module.scss'

const Burger = () => {
	return (
		<>
			<label className={styles.Burger} for="toggle">
				<span className={styles.Bar}></span>
				<span className={styles.Bar}></span>
				<span className={styles.Bar}></span>
			</label>
		</>
	)
}
export default Burger