import React, { FunctionComponent } from 'react';
import IconTitle from './IconTitle';

interface OwnProps {
	title: string;
	extraClassName?: string;
	children: JSX.Element;
}

const Section: FunctionComponent<OwnProps> = props => {
	return (
		<div className={` p-2.5 ${props.extraClassName}`}>
			<IconTitle text={props.title} />
			{props.children}
		</div>
	);
};

export default Section;
