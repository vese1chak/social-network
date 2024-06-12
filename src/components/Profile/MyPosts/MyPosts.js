import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className="content__posts">
			<div className="posts__input">
				My posts
				<div>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
			<div className="posts__tape">
				<Post />
			</div>
		</div>
	);
};

export default MyPosts;