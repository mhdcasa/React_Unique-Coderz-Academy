import React , {Component} from 'react';
import Items from './Components/Item';
import Nav from './Components/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Rout from './Components/Rout';
import Col from './Components/Col';
import './App.css';
import own_image from './img_test.jpg';



class App extends Component {
	

state = {
	name : "mehdi",
	class:""
}


change_state = (evt) =>{
	this.setState({
		name : evt.target.value
	});
	if (this.state.name.length > 20) {
		this.setState({
			class:"input-disable"
		})
	}else{
		this.setState({
			class:""
		})

	}
}

checkvar=()=>{
	console.log(this);
}






	render(){
		// console.log("render");
		return(
			<BrowserRouter>
			<div className="myApp">
			 	<Nav />
			 	<Switch>
			 	<Route exact path="/" component={Home}/>
			 	<Route path="/About" component={About}/>
			 	<Route path="/blog" component={Blog}/>
			 	<Route path="/:test_parameters" component={Rout}/>
			 	</Switch>
			 	<h1>Exemple fragment</h1>
			 	<table>
			 		<tbody>
			 		<tr>
			 			<Col/>
			 		</tr>
			 		</tbody>
			 	</table>

			 	<img src={own_image} alt="my own image"/>
				 <button onClick={this.checkvar}>click here</button>
					<h1>{this.state.name} {this.state.name.length}</h1>
				 <input value={this.state.name} onChange={this.change_state} id="input_id" className={this.state.class}/>

				 {this.props.value}
			</div>
			</BrowserRouter>
		)
	}	
}

export default App;
