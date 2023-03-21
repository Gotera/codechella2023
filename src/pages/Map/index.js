import MapOneBg from 'components/Backgrounds/Header/Backgrounds/MapOneBg'
import styles from './Map.module.scss'
import mapOfEvent from 'assets/Map/sectorsmap.png'
import track from 'assets/Map/img72.png'
import premiumTrack from 'assets/Map/img73.png'
import chairs from 'assets/Map/img74.png'

const Map = () => {
	return (
		<>
			<MapOneBg />
			<div className={styles.Map__Container}>
				<div className={styles.Map__Legend__Wrapper}>
					<img src={mapOfEvent} alt='Mapa do evento' />
					<ul>
						<li>Legenda: </li>
						<li>
							<div className={styles.box1} />
							Pista Premium
						</li>
						<li>
							<div className={styles.box2} />
							Pista Comum
						</li>
						<li>
							<div className={styles.box3} />
							Cadeiras térreio
						</li>
						<li>
							<div className={styles.box4} />
							Cadeiras superiores
						</li>
						<li>
							<div className={styles.box5} />
							Rampas
						</li>
					</ul>
				</div>
				<div className={styles.Map__Info}>
					<div className={styles.Map__Info__Container}>
						<img src={track} alt='Informações sobre a Pista' />
						<h3>Pista</h3>
						<p>
							Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.
						</p>
					</div>
					<div className={`${styles.Map__Info__Container} ${styles.Mobile__Adjustment}`}>
						<img src={premiumTrack} alt='Informações sobre a Pista Premium' />
						<h3>Pista Premium</h3>
						<p>
							Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
						</p>
					</div>
					<div className={styles.Map__Info__Container}>
						<img src={chairs} alt='Informações sobre as Cadeiras' />
						<h3>Cadeiras</h3>
						<p>
							Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Map