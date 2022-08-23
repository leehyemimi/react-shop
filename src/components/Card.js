
function Card({shoes,i}){
	let nm =  i + 1 ;
	return(
		<div className="col-md-4">
			<img src={'https://codingapple1.github.io/shop/shoes'+ nm +'.jpg'} alt="" width="80%"/>
			<h4>{shoes[i].title}</h4>
			<p>{shoes[i].content}</p>
			<p>{shoes[i].price}</p>
		</div>
	)
}

export default Card;