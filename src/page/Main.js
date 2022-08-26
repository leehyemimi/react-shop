
import axios from 'axios';
import { useState } from 'react';

import Card from '../components/Card';

import lodingimg from '../img/loding.gif'

import './Main.scss';

function Main({ shoes, setShoes }) {
	let [more, setMore] = useState(1);
	let [loding, setLoding] = useState(false);
	return (
		<>
			<div className='main-bg'></div>
			<div className="container">
				<div className="row">
					{
						shoes.map((a, i) => {//function(a,i) -> (a,i)=>
							return (
								<Card shoes={shoes} i={i} key={i} />
							)
						})
					}
					{
						loding === true
							? <div className='loding'>
								<img src={lodingimg} alt="" />
							</div>
							: null
					}
				</div>
			</div>

			<button onClick={() => {
				setMore(more = more + 1);
				if (more > 3) {
					alert('더 이상 상품이 없습니다.');
				} else {
					setLoding(true);
					axios.get('https://codingapple1.github.io/shop/data' + more + '.json')
						.then((data) => {
							let shoesCopy = [...shoes];
							shoesCopy.push.apply(shoesCopy, data.data);
							setShoes(shoesCopy);
							setLoding(false);
						})
						.catch(() => {
							console.log('오류');
						})
				}
			}}>더보기</button>
		</>
	)
}

export default Main;