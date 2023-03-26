import React from 'react'
import codeChellaLogo from 'assets/Logo1.png'
import styles from './header.module.scss'
import Burger from './Burger'

const Header = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.test}>
					<a href='/'>
						<img src={codeChellaLogo} alt='codechella' />
					</a>
					<input type='checkbox' id='toggle' />
					<Burger />
					<nav id='itens'>
						<ul>
							<li>
								<a href='/about'>
									A experiência
								</a>
							</li>
							<li>
								<a href='/map'>
									Mapa de Setores
								</a>
							</li>
							<li>
								<a href='/info'>
									Informações
								</a>
							</li>
							<li>
								<a href='/passe'>
									Ingresso
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Header;