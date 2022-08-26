import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
	let { id } = useParams();
	let shoesId = shoes.find((x) => x.id = id);
	//const shoesId = shoes.filter(item => item.id === id);
	// const shoesId = shoes.find((x)=> {
	// 	return x.id = id;
	// })
	let [inputText, setInputText] = useState(true);

	useEffect(() => {
		// let a = setTimeout(() => { setAlert(false); }, 2000);
		// return () => {
		// 	clearTimeout(a);
		// };
		if (isNaN(inputText) == true) {
			alert('그러지마세요')
		}
	}, [inputText]);

	return (
		<>
			{
				alert == true
					? <Alert />
					: null
			}
			<div className="container">
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
			</div>
		</>
	)
}

function Alert() {
	return (
		<div className='free'>2초 안에 클릭하면 무료</div>
	)
}

export default Detail;