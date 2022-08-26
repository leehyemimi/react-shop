import { useNavigate } from 'react-router-dom';

function Card({ shoes, i }) {
	let nm = i + 1;
	let navigate = useNavigate();
	return (
		<div className="col-md-4" onClick={() => { navigate('/react-shop/detail/' + i) }}>
			<img src={'https://codingapple1.github.io/shop/shoes' + nm + '.jpg'} alt="" width="80%" />
			<h4>{shoes[i].title}</h4>
			<p>{shoes[i].content}</p>
			<p>{shoes[i].price}원</p>
		</div>
	)
}

export default Card;