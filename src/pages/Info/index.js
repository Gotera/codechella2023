import styles from './Info.module.scss'
import arrow_drop_down from 'assets/Info/arrow_drop_down.png'
import data from './FAQdata.json'
import { useState } from 'react'

const Info = () => {
	const [selected, setSelected] = useState(null)
	const toggle = i => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return (
		<>
			<div className={styles.Info__Container}>
				{data.map((item, i) => (
					<div className={styles.FAQ__Container}>
						<div className={styles.FAQ__Question} onClick={() => toggle(i)}>
							<h2>{item.question}</h2>
							<span>{selected === i ? '-' : '+'}</span>
						</div>
						<div className={selected === i ? 'FAQ__Answer' : 'FAQ__Answer'}
						>
							<p>
								{item.answer}
								<a href='/#teste__teste'>
									{item.complement}
								</a>
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Info