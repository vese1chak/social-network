import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}><NavLink to="/" className={navData => navData.isActive ? classes.active : ""}>Profile</NavLink></li>
				<li className={classes.item}><NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : ""}>Messages</NavLink></li>
				<li className={classes.item}><NavLink to="/friends" className={navData => navData.isActive ? classes.active : ""}>Friends</NavLink></li>
				<li className={classes.item}><NavLink to="/news" className={navData => navData.isActive ? classes.active : ""}>News</NavLink></li>
				<li className={classes.item}><NavLink to="/music" className={navData => navData.isActive ? classes.active : ""}>Music</NavLink></li>
				<li className={classes.item}><NavLink to="/settings" className={navData => navData.isActive ? classes.active : ""}>Settings</NavLink></li>
			</ul>
		</nav>
	);
};

export default Navbar;