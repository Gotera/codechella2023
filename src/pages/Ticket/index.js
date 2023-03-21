import styles from './Ticket.module.scss'

import React from 'react'

const Ticket = () => {
	return (
		<>
			<div className={styles.Ticket__Container}>
				<form>
					<h2>Preencha o formulário a seguir:</h2>

					<legend>Nome Completo:</legend>
					<input type='text'/>
					<legend>Email:</legend>
					<input type='text'/>
					<legend>Tipo de Ingresso:</legend>
					<select >
						<option>Selecione</option>
					</select>
					<legend>Data de Nascimento:</legend>
					<input />
					<button>Avançar!</button>
				</form>
			</div>
		</>
	)
}

export default Ticket