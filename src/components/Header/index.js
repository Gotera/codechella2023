import React from 'react'
import codeChellaLogo from 'assets/Logo1.png'
import codeChellaBanner from 'assets/Boreal.png'
import styles from './header.module.scss'

const Header = () => {
	return (
		<>
			<div className={styles.container}>
				<img src={codeChellaLogo} alt='codechella' />
				<ul>
					<li>A experiência</li>
					<li>Mapa de Setores</li>
					<li>Informações</li>
					<li>Ingresso</li>
				</ul>
			</div>
			<img src={codeChellaBanner} alt='CodeChella 2023 Banner'/>
		</>
	)
}

export default Header;