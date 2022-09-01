import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

//data
import data from './components/data';

//page
import Main from './page/Main'
import Detail from './page/Detail'
import Event from './page/Event'
import Notpage from './page/Notpage'

import './App.scss';

function App() {
	let [shoes, setShoes] = useState(data);
	let [재고, 재고변경] = useState([10, 11, 12]);
	let navigate = useNavigate();

	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand onClick={() => { navigate('/react-shop/') }}>ShoesShop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link onClick={() => { navigate('/react-shop/') }}>Home</Nav.Link>
						<Nav.Link onClick={() => { navigate('/react-shop/detail/0') }}>Detail</Nav.Link>
						<Nav.Link onClick={() => { navigate('/react-shop/event/one') }}>Event 1</Nav.Link>
						<Nav.Link onClick={() => { navigate('/react-shop/event/two') }}>Event 2</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route path="/react-shop/" element={<Main shoes={shoes} setShoes={setShoes} />} />
				<Route path="/react-shop/detail" element={<Detail shoes={shoes} />} />
				<Route path="/react-shop/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path='*' element={<Notpage />}></Route>

				<Route path="/react-shop/event" element={<Event />}>
					<Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
					<Route path="two" element={<p>생일기념 쿠폰 받기</p>} />
				</Route>
			</Routes>
		</div >
	);
}

export default App;