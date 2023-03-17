import React from 'react'
import codeChellaLogo from 'assets/Logo1.png'
import styles from './header.module.scss'
import Burger from './Burger'

const Header = () => {
	return (
		<>
			<div className={styles.container}>
				<img src={codeChellaLogo} alt='codechella' />
				<input type='checkbox' id='toggle' />
				<Burger />
				<nav id='itens'>
					<ul>
						<li>
							<a href='#'>
								A experiência
							</a>
						</li>
						<li>
							<a href='#'>
								Mapa de Setores
							</a>
						</li>
						<li>
							<a href='#'>
								Informações
							</a>
						</li>
						<li>
							<a href='#'>
								Ingresso
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header;