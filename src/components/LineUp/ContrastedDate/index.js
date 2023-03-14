import React from 'react'
import styles from './ContrastedDate.module.scss'

const ContrastedDate = (props) => {
	return (
		<>
			<div className={styles.ContrastedDate__Container}>
				<h1><span>{props.date}</span></h1>
			</div>
		</>
	)
}

export default ContrastedDate;