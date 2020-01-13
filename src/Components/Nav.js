import React from "react";
import './nav.css';
import {Link, NavLink} from 'react-router-dom'

const Nav = ()=>{
	return(

		<div className="nav_class_component">

			<a className="nav_logo" href="/">Logo</a>

			<ul>
				{/*<li><a href="/">Home</a></li>
				<li><a href="About">About</a></li>*/}

				{/*LINK POUR ARRETE ACTUALISATION DE LA PAGE COMME PREVENTDEFAULT DYAL JQUERY*/}

				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>

				{/*NavLink hadi katzid liya class active 3la componenet li jab liya actuellemnt*/}
				<br/>
				<br/>
				<br/>
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/About">About</NavLink></li>

				{/*daba ila bghit ana nsami dak class li active*/}

				<br/>
				<br/>
				<br/>
				<li><NavLink activeClassName="active_link" exact to="/">Home</NavLink></li>
				<li><NavLink activeClassName="active_link" to="/About">About</NavLink></li>
				<li><NavLink activeClassName="active_link" to="/blog">Blog</NavLink></li>
				<li><NavLink activeClassName="active_link" to="/rout">Rout</NavLink></li>

			</ul>

		</div>

	)
}

export default Nav;