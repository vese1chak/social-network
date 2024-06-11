import React from 'react';

const Header = () => {
	return (
		<section className="content">
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
			<div className="content__posts">
				<div className="posts__input">
					My posts
					<div>
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
				<div className="posts__tape">
					<div className="tape__post">
						post1
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;