import React from "react";

const Rout = (props)=>{
	console.log(props)

	let dynamic_param = props.match.url
	return(

		

		<div className="about_class_component">

		<h1>Section Rout componenet</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis inventore dolorem rerum et tempora sint nemo illum ab saepe, assumenda, amet illo deleniti officiis, voluptatem maxime atque vero sunt.</p>
		{dynamic_param}
		</div>

	)
}

export default Rout;