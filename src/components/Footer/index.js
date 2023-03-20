import styles from './Footer.module.scss'
import React from 'react'
import instagramSM from 'assets/SM/InstagramSM.png'
import twitchSM from 'assets/SM/TwitchSM.png'
import twitterSM from 'assets/SM/TwitterSM.png'
import whatsSM from 'assets/SM/WhatsSM.png'
import codeChellaLogo from 'assets/Logo1.png'

const Footer = () => {
	return (
		<>
			<div className={styles.Footer__Container}>
				<div className={styles.SocialMedia__Container}>
					<img src={codeChellaLogo} alt="Codechella 2023 logo" />
					<span>
						Acesse nossas redes
					</span>
					<ul>
						<li>
							<a href='#'>
								<img src={instagramSM} alt='Instagram Icon' />
							</a>
						</li>
						<li>
							<a href='#'>
								<img src={twitchSM} alt='Twitch Icon Icon' />
							</a>
						</li>
						<li>
							<a href='#'>
								<img src={twitterSM} alt='Twitter Icon' />
							</a>
						</li>
						<li>
							<a href='#'>
								<img src={whatsSM} alt='Whatsapp Icon' />
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.Congratulations__Container}>
					<ul>
						<li>Desenvolvido por ‎
							<a
								href='https://www.alura.com.br'
								target='_blank'
								rel="noreferrer"
							>
								Alura
							</a>.
						</li>
						<li>
							Coded por ‎
							<a
								href='https://orlandomedeiros.vercel.app'
								target='_blank'
								rel="noreferrer">
								Orlando
							</a>.
						</li>
						<li>Projeto fictício sem fins comerciais.</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Footer;