import React from 'react'
import codeChellaLogo from '../../assets/Logo1.png'

const Header = () => {
	return (
		<>
			<img src={codeChellaLogo} alt='codechella' />
			<ul>
				<li>A experiência</li>
				<li>Mapa de Setores</li>
				<li>Informações</li>
				<li>Ingresso</li>
			</ul>
		</>
	)
}

export default Header;