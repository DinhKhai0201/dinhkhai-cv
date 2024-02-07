import React, { FunctionComponent } from 'react';
import IconTitle from './IconTitle';
import ContactItem from './ContactItem';
import ProfilePicture from './ProfilePicture';
import { CvData } from '../models/CvData';

const PersonalSection: FunctionComponent<CvData> = ({
	imageUrl,
	fullName,
	title,
	about,
	hobbies,
	contactItems,
}) => (
	<div className={'flex-1 p-10 bg-[#3a393e]'}>
		<ProfilePicture imgUrl={imageUrl} />
		<h1 className={'text-center font-bold uppercase text-[#eae8eb] mb-[5px] text-[2em]'}>{fullName}</h1>
		<h2 className={'text-center font-semibold text-[1.07em] text-[#1492b6] uppercase m-0 p-0'}>{title}</h2>
		<div className={'text-[#7c7b80] mt-[60px]'}>
			<IconTitle text="About Me" />
			<p>{about}</p>
			<p>{hobbies}</p>
		</div>
		<div className={'text-[#7c7b80] mt-[50px]'}>
			<IconTitle text="Contact" />
			{contactItems.map(ci => (
				<ContactItem
					key={ci.label}
					label={ci.label}
					value={ci.value}
					href={ci.href}
				/>
			))}
		</div>
	</div>
);

export default PersonalSection;
