import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	let posts = [
		{id: 1, text: 'It\'s my first post'},
		{id: 2, text: 'It\'s my second post'},
		{id: 3, text: 'It\'s my third post'},
		{id: 4, text: 'It\'s my fourth post'}
	]

	let postsElements = posts.map(post => (
		<Post text={post.text} />
	))

	return (
		<div className="content__posts">
			<div className="posts__input">
				My posts
				<div>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
			<div className="posts__tape">
				{ postsElements.reverse() }
			</div>
		</div>
	);
};

export default MyPosts;