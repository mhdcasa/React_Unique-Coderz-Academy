import React , {Component} from 'react';



class Items extends Component{



	render(){


		const {data_value} = this.props;
		const theItems = data_value.map( (item_view) =>{

			return(

				<div key={item_view.id}>
					<p>{item_view.id}</p>
					<p>{item_view.name}</p>
					<p>{item_view.age}</p>
					<hr/>
				</div>

			)
		})




		// Exemple 2 
		// const id 	= this.props.id;
		// const name 	= this.props.name;
		// const age 	= this.props.age;

		// Exemple 3

		// const {id , name , age} = this.props;


		return(
			<div>
				{/*Exemple 1 :
				<b>Id</b> : {this.props.id}<br />
				<b>Nom</b> : {this.props.name}<br />
				<b>Age</b> : {this.props.age}<br />*/}


				{/*Exemple 2*/}

				{/*<b>Id</b> : {id}<br />
				<b>Nom</b> : {name}<br />
				<b>Age</b> : {age}<br />*/}


				{/*Exemple 3*/}
				{/*<b>Id</b> : {id}<br />
				<b>Nom</b> : {name}<br />
				<b>Age</b> : {age}<br />*/}

				{theItems}
{console.log({data_value})}

			</div>
		)
	}

}

export default Items;