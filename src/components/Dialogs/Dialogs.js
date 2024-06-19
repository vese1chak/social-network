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
		<div className={classes.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {
	let dialogs = [
		{id: 1, name: 'Sasha'},
		{id: 2, name: 'Alina'},
		{id: 3, name: 'Borya'},
		{id: 4, name: 'Maksim'},
	]

	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hi'},
		{id: 3, message: 'How are you?'},
		{id: 4, message: 'I\'m fine, and you?'}
	]

	let dialogsElements = dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} />
	))

	let messagesElements = messages.map(message => (
		<Message message={message.message} />
	))

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messagesElements}
			</div>
		</div>
	);
};

export default Dialogs;