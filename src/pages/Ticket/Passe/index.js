import styles from './Passe.module.scss'
import logoIcon from 'assets/Logo1.png'
import favIcon from 'assets/faviconWhite.png'
import qrCode from 'assets/Qrcode1.png'
import { useContext } from 'react';
import { UserContext } from 'common/context/User';

const Passe = () => {
	const {
		name,
		passe,
		date
	} = useContext(UserContext);
	return (
		<div className={styles.Tittle}>
			<h1>Uhul, agora sim!
				Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h1>
			<div className={styles.Passe__Container}>
				<div className={styles.Header__Card__Container}>
					<img src={logoIcon} alt='Logo CodeChella 2023' id='img1' />
					<img src={favIcon} alt='Icon Code Chella 2023' id='img2' />
				</div>
				<div className={styles.Content__Container}>
					<img src={qrCode} alt='QRCODE emulator' id='img2' />
					<h3>{name}</h3>
					<p>Ingresso Costesia</p>
					<p>Setor {passe}</p>
					<p>Data: {date}</p>
					<p>Local: São Paulo-SP</p>
				</div>
			</div>
		</div>
	)
}

export default Passe