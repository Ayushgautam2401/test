import React, { useState } from 'react'
import "./style.scss"

interface Props {
	parent: any;
	children: any;
}
const Container = ({ children, parent }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	const tell = () => {
		setShow(!show);
	}
	return (
		<div>
			<div onClick={tell}>
				{parent}
				{show && <>{children}</>}
			</div>
		</div>
	)
}

function SideBar() {

	return (
		<div className='outerContent'>
			<div className='innerContent'>
				<Container parent={'logo'} children={"HOME"} />
				<Container parent={'logo'} children={"company"} />

			</div>
		</div>
	)
}

export default SideBar