import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
	return (
		<div className="posts__tape">
			<div className={classes.tape__post}>
				{props.text}
			</div>
		</div>
	);
};

export default Post;