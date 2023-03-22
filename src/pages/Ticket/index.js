import styles from './Ticket.module.scss'
import localActivity from 'assets/Info/local_activity.png';

const Ticket = () => {
	return (
		<>
			<div className={styles.Ticket__Container}>
				<form>
					<h2>Preencha o formulário a seguir:</h2>

					<legend>Nome Completo:</legend>
					<input type='text' />
					<legend>Email:</legend>
					<input type='text' />

					<div className={styles.Special__Container}>
						<div className={styles.Special__Container1}>
							<legend>Tipo de Ingresso:</legend>
							<select >
								<option>Selecione</option>
							</select>
						</div>
						<div className={styles.Special__Container2}>
							<legend>Data de Nascimento:</legend>
							<input />
						</div>
					</div>
				</form>
				<button>
					<p>
						Avançar!
					</p>
					<img src={localActivity} alt='Right Arrow' />
				</button>
			</div>
		</>
	)
}

export default Ticket