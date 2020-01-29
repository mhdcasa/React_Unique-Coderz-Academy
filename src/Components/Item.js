import React , {Component} from 'react';
import "./Item.css";

class Items extends Component{


	state = {
		firstname : ""
	}



	submitEvent = (e) =>{
		e.preventDefault();

		console.log("e", e.target);
		console.log("e", e.target.getElementsByClassName("myclass5")[0].size);
		e.target.getElementsByClassName("myclass5")[0].size = 66;
		console.log("ee2", e.target.getElementsByClassName("myclass5")[0].size);
		// this.setState({
		// 	firstname : e.myclass1.target.value;
		// })

	}

		

	render(){

		const {elements} = this.props;

		const displayitems = elements.map(item =>{
			return(
				<div key={item.id}>
					<p><b>ID : </b>{item.id}</p>
					<p><b>name : </b>{item.name}</p>
					<hr></hr>
				</div>
			)
		})



		

		// const {id,name}=this.props;  
		 //f had lkitaba kangol lih jib liya id mn props o 7atha f1 variable smito id o jib liya name mn this.props o 7atha liya f 1 variable smito name


		return (
			<div className="myItemClass">
				<h1>Hello bo9al ana f componenet item</h1>		
				{/* <h2>{id}</h2>
				<h3>{name}</h3> */}

				{displayitems}
				<h1>Start Form</h1>
				<form onSubmit={this.submitEvent}>
					<input type='text' className="myclass1" />
					<input type='text' className="myclass2" />
					<input type='text' className="myclass3" />
					<input type='text' className="myclass4" />
					<input type='text' className="myclass5" />
					<input type="submit" value="envoyer"  />
				</form>

				{this.state.firstname}
			</div>
		)

		
	}

}

export default Items;