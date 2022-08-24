import { Outlet } from 'react-router-dom'

import './Event.scss'

function Event() {
	return (
		<div className='event'>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	)
}

export default Event;