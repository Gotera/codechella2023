import styles from './Info.module.scss'
import arrow_drop_down from 'assets/Info/arrow_drop_down.png'

const Info = () => {
	return (
		<>
			<div className={styles.Info__Container}>
				<div className={styles.FAQ__Container}>
					<section className='faq'>
						<div className={styles.FAQ__Question}>
							<h2>Quais serão as atrações?</h2>
							<img src={arrow_drop_down} alt='Arrow Drop Down FAQ answer' />
						</div>
						<div className={styles.FAQ__Answer}>
							<p>
								Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop.
								<a href='/#teste__teste'>
									Confira o line-up em detalhes clicando neste link!
								</a>
							</p>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Info