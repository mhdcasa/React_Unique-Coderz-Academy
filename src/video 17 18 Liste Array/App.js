import React , {Component} from 'react';
import Items from './Components/Item'
import './App.css';

class App extends Component {


	state =  {
		data_array :[
			{id:1 , name:"mehdi" , age:31},
			{id:2 , name:"aymen" , age:4},
			{id:3 , name:"fofo" , age:33}
		]
	}


	render(){
		return(
			<div className="App">
					
			<h1>Liste item</h1>


			{/*EXEMPLE 1 Voir Component items.js exactement EXEMPLE1*/ }
			{/*<Items id="1" name="mehdi" age="32" />*/}

			<Items  data_value={this.state.data_array} />

			</div>

		)
	}
	
}

export default App;
