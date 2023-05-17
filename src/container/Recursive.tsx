import React, { useState } from "react";
import { set } from "react-hook-form";
import './style.scss'

interface Props {
	data: any
}

export const RecursiveComponent = ({ data }: Props) => {
	const [isVisible, setIsVisible] = useState(false);
	const expand = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div>
			<div>
				{data.map((parent: any) => {
					return (
						<>
							<div className="parent" onClick={expand}> {parent && <li>{parent.name}</li>}</div>
							{
								isVisible && <div className="child" style={{ paddingLeft: 10 }} >
									{parent.children && <RecursiveComponent data={parent.children} />}
								</div>
							}

						</>
					);
				})}
			</div>
		</div>
	);
};