import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={classes.dialog}>
			<NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? classes.active : ""}>{props.name}</NavLink>
		</div>
	)
}
const Message = (props) => {
	return (
		<div className={classes.message}>{props.text}</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name="Sasha" id="1" />
				<DialogItem name="Alina" id="2" />
				<DialogItem name="Borya" id="3" />
				<DialogItem name="Maksim" id="4" />
			</div>
			<div className={classes.messages}>
				<Message text="Hi" />
				<Message text="What?" />
			</div>
		</div>
	);
};

export default Dialogs;