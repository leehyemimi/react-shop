import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

import './Detail.scss'

function Detail({ shoes }) {
	let { id } = useParams();
	let shoesId = shoes.find((x) => x.id = id);
	//const shoesId = shoes.filter(item => item.id === id);
	// const shoesId = shoes.find((x)=> {
	// 	return x.id = id;
	// })
	let [inputText, setInputText] = useState(true);
	let [tab, setTab] = useState(0);

	useEffect(() => {
		// let a = setTimeout(() => { setAlert(false); }, 2000);
		// return () => {
		// 	clearTimeout(a);
		// };
		if (isNaN(inputText) == true) {
			alert('그러지마세요')
		}
	}, [inputText]);

	let [fade1, setFade1] = useState('');
	useEffect(() => {
		setTimeout(() => { setFade1('end') }, 100)
		return () => {
			setFade1('');
		}
	}, [id]);

	return (
		<>
			{
				alert == true ? <Alert /> : null
			}
			<div className={"container start " + fade1}>
				<div className="row">
					<div className="col-md-6">
						<img src={'https://codingapple1.github.io/shop/shoes' + (Number(shoesId.id) + 1) + '.jpg'} width="100%" />
					</div>
					<div className="col-md-6">
						<h4 className="pt-5">{shoesId.title}</h4>
						<div className='input-box'>
							<input type="text" onChange={(e) => setInputText(e.target.value)} />
						</div>
						<p>{shoesId.content}</p>
						<p>{shoesId.price}원</p>
						<button className="btn btn-danger">주문하기</button>
					</div>
				</div>

				<Nav variant="tabs" defaultActiveKey="link0">
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
					</Nav.Item>
				</Nav>
				<TabContent tab={tab} />
			</div>
		</>
	)
}

function Alert() {
	return (
		<div className='free'>2초 안에 클릭하면 무료</div>
	)
}

function TabContent({ tab }) {
	let [fade, setFade] = useState('')
	useEffect(() => {
		setTimeout(() => { setFade('end') }, 100)
		return () => {
			setFade('');
		}
	}, [tab]);
	return (
		<div className={'start ' + fade}>
			{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
		</div>
	)
	// if (tab === 0) {
	// 	return <div>내용0</div>
	// } else if (tab === 1) {
	// 	return <div>내용1</div>
	// } else if (tab === 2) {
	// 	return <div>내용2</div>
	// }
}

export default Detail;