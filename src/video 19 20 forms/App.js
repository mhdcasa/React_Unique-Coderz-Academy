import React , {Component} from 'react';
import './App.css';

class App extends Component {

state = {
	name : "mehdi",
	slected_val	 : "Value 2"
}



handleSubmit = (e) =>{
	e.preventDefault();
	console.log(this.state.name )
	console.log(this.state.slected_val )
}


handleChange = (e) =>{
	// console.log(e.target.value);
	this.setState({
		name : e.target.value
	})
}

handleChangeselect = (e) =>{
	this.setState({
		slected_val : e.target.value
	})
}


	render(){

		return(

			<div className="myApp">
			<form onSubmit={this.handleSubmit}>
			<input type="text"  onChange={this.handleChange}/>
			<br/>
			<br/>
			<br/>
			<textarea onChange={this.handleChange}></textarea>
			<br/>
			<br/>
			<br/>
			<select onChange={this.handleChangeselect} value={this.state.slected_val}>
			<option value="Value 1">Value 1</option>
			<option value="Value 2">Value 2</option>
			<option value="Value 3">Value 3</option>
			<option value="Value 4">Value 4</option>
			</select>
			<br/>
			<br/>
			<br/>
			<input type="submit" value="Enregister"/>			
			</form>
			{this.state.name}
			</div>

			

		)
	}	
}

export default App;
