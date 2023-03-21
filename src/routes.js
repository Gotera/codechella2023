import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'pages/About';
import Home from 'pages/Home/App';
import Info from 'pages/Info';
import Map from 'pages/Map';
import Ticket from 'pages/Ticket';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/map' element={<Map />} />
					<Route path='/info' element={<Info />} />
					<Route path='/passe' element={<Ticket />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}