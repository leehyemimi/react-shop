
import { Navbar , Nav, Container} from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import data from './data.js'

function App() {
	let [shoes,setShoes]= useState(data);

	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				</Container>
			</Navbar>
			<div className="main-bg"></div>
			<div className="container text-center shoes-list">
				<div className="row">
					{
						shoes.map((a,i)=>{
							return(								
								<Card shoes={shoes} i={i}></Card>								
							)	
						})
					}

					{/* <div className="col">
						<img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
						<h4>{data[0].title}</h4>
						<p>{data[0].price}</p>
					</div>
					<div className="col"><img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" /></div>
				
					<div className="col"><img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" /></div> */}
				</div>
			</div>
		</div>
	);
}



function Card(props){
	return (
		<div className='col-md-4'>
			<img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} alt="" className='shoes-img'/>
			<h4>{props.shoes[props.i].title}</h4>
			<p>{props.shoes[props.i].price}</p>
		</div>
	);
}


export default App;
