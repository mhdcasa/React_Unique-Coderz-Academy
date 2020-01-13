import React , {Component} from 'react';
import Items from './Components/Item';
import './App.css';

class App extends Component {
	
	constructor () {
		super();
		console.log("constructor");
	}


	componentDidMount (){
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps,prevState){
		console.log("componenet Did Update",prevProps,prevState);
	}




// LifeCycle Components
// constructor
// componentDidMount
// componentDidUpdate







	state = {
		data_array : [
			{id : 1 , name : "mehdi" , age : 31 , count : 2},
			{id : 2 , name : "mohammed" , age : 32 , count : 5},
			{id : 3 , name : "aymen" , age : 4 , count : 1},

		]
	}


	add_element = () =>{
		let rand = Math.random();
		let data_val = this.state.data_array;
		data_val.push({id : rand , name : "mehdi" , age : 31 , count : 2});

		this.setState({
			data_array :data_val
		})
	}




	delete_element = () =>{
		let rand = Math.random();
		this.setState({
			data_array :[
				{id : rand , name : "hicham" , age : 31 , count : 2}
			]
		})
	}




	render(){
		console.log("render");
		return(
			<div className="myApp">
			 	<Items data_valeu_props = {this.state.data_array} />
			 	<button onClick={this.add_element}>Ajouter Element</button>
			 	<button onClick={this.delete_element}>Supprimer Elements</button>
			</div>
		)
	}	
}

export default App;
