import { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './components/data';

import Detail from './page/Detail'
import Main from './page/Main'

import './App.scss';

function App() {
	let [shoes] = useState(data);
	let navigate = useNavigate();

	return (
	<div className="App">
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand onClick={()=>{navigate('/')}}>ShoesShop</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
					<Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

		<Routes>
			<Route path="/" element={ <Main shoes={shoes} /> } />
			<Route path="/detail" element={ <Detail shoes={shoes} /> } />
			<Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
			{/* <Route path='*' element={ <div>없는페이지 입니다. </div>}></Route> */}

			<Route path="/event" element={ <Event /> }>
				<Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> } />
				<Route path="two" element={ <p>생일기념 쿠폰 받기</p> } />
			</Route>
		</Routes>
		
	</div>
	);
}

function Event(){
	return(
		<div className='event'>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	)
}
export default App;
