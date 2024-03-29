import UserProvider from 'common/context/User';
import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'pages/About';
import Home from 'pages/Home/App';
import Info from 'pages/Info';
import Map from 'pages/Map';
import Ticket from 'pages/Ticket';
import Passe from 'pages/Ticket/Passe';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Header />
				<UserProvider>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/map' element={<Map />} />
						<Route path='/info' element={<Info />} />
						<Route path='/passe' element={<Ticket />} />
						<Route path='/ingresso' element={<Passe />} />
					</Routes>
				</UserProvider>
				<Footer />
			</Router>
		</main>
	)
}