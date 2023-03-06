import React from 'react'
import HighLightCardImg from 'assets/Rectangle1.png'
import styles from './HighLightCard.module.scss'

const HighLightCard = () => {
	return (
		<>
			<section>
				<img src={HighLightCardImg} alt='CodeChella Highlight Banner' />
				<div className={styles.text__box}>
					<div className={styles.text__box__container}>
						<h3>
							&#10094; 11 e 12 de Março &#10095;
							<br />
							Aluródromo de São Paulo
						</h3>
						<p>
							Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
						</p>
						<button>
							<p>Comprar Ingresso!</p>
							<img src='/assets/startEmblem.png'/>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default HighLightCard