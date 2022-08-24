
import Card from '../components/Card';

import './Main.scss';

function Main({ shoes }) {
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
				</div>
			</div>
		</>
	)
}

export default Main;