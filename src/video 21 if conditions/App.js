import React , {Component} from 'react';
import Items from './Components/Item';
import './App.css';

class App extends Component {

	state = {
		data_array : [
			{id : 1 , name : "mehdi" , age : 31 , count : 2},
			{id : 2 , name : "mohammed" , age : 32 , count : 5},
			{id : 3 , name : "aymen" , age : 4 , count : 1},

		]
	}

	render(){

		return(

			<div className="myApp">
			 
			 <Items data_valeu_props = {this.state.data_array} />
			
			</div>

			

		)
	}	
}

export default App;
