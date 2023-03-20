import React from 'react'
import styles from './About.module.scss'
import people from 'assets/About/people.png'
import sustentability from 'assets/About/recicle.png'
import attractions from 'assets/About/entreteniment.png'
import SecondOneHeader from 'components/Backgrounds/Header/Backgrounds/SecondOneHeader'

const About = () => {
	return (
		<>
		<SecondOneHeader />
			<div className={styles.About__Container}>
				<div className={styles.Image__Text__Container}>
					<img src={people} alt='Acessibilidade e Inclusão Banner' />
					<div className={styles.Text__Container}>
						<h1>Acessibilidade e Inclusão</h1>
						<p>
							Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
						</p>
					</div>
				</div>
				<div className={`${styles.Image__Text__Container} ${styles.Mobile__Adjustment}`}>
					<img src={sustentability} alt='Sustentabilidade Banner' />
					<div className={styles.Text__Container}>
						<h1>Sustentabilidade</h1>
						<p>
							Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
						</p>
					</div>
				</div>
				<div className={styles.Image__Text__Container}>
					<img src={attractions} alt='Atrações Banner' />
					<div className={styles.Text__Container}>
						<h1>Atrações</h1>
						<p>
							Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default About