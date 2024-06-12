import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<section>
			<div className="content__info">
				<div className="info__avatar">
					<img src="#" alt="avatar"/>
				</div>
				<div className="info__fullname">
					Владислав Фадеев
				</div>
				<div className="info__data">

				</div>
			</div>
			<MyPosts />
		</section>
	);
};

export default Profile;