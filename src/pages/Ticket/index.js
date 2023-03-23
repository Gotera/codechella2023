import styles from './Ticket.module.scss'
import localActivity from 'assets/Info/local_activity.png';
import { useContext } from 'react';
import { UserContext } from 'common/context/User';
import { useNavigate } from 'react-router-dom';


const Ticket = () => {
	const navigate = useNavigate();
	const {
		name,
		setName,
		email,
		setEmail
	} = useContext(UserContext);
	return (
		<>
			<div className={styles.Ticket__Container}>
				<form>
					<h2>Preencha o formulário a seguir:</h2>

					<legend>Nome Completo:</legend>
					<input
						type='text'
						id='name'
						placeholder='Ex: Code Chella 2023'
						onChange={(event) => setName(event.target.value)}
					/>
					<legend>Email:</legend>
					<input
						type='email'
						id='email'
						placeholder='Ex: leandroViado@gmail.com'
						onChange={(event) => setEmail(event.target.value)}
					/>

					<div className={styles.Special__Container}>
						<div className={styles.Special__Container1}>
							<legend>Tipo de Ingresso:</legend>
							<select id='passe' name='passe'>
								<option>Selecione</option>
								<option value='IC'>Ingresso Comum</option>
								<option value='IP'>Ingresso Premium</option>
							</select>
						</div>
						<div className={styles.Special__Container2}>
							<legend>Data de Nascimento:</legend>
							<input type='date' />
						</div>
					</div>
				</form>
				<button
					disabled={name < 2}
					onClick={(event) => navigate('/')}
				>
					<p>
						Avançar!
					</p>
					<img src={localActivity} alt='Right Arrow' />
				</button>
				{name}
				<br></br>
				{email}
			</div>
		</>
	)

}

export default Ticket