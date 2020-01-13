import React , {Component} from 'react';
import {default as test_class} from './module';
import Child from './Child';
import './App.css';

class App extends Component {

	Test(var1){
		console.log(var1)
	}

	Test_2 = (var2) =>{
		console.log(var2)
	}

	state={
		name : "mehdi",
		age:31
	}

	click_handle = () =>{
		console.log("nice you have clicked me")
	}

	hover_function = () =>{
		console.log("nice you have hover me")
	}


	name_state = () =>{
		console.log(this.state.name)
	}

	change_state = () =>{
		this.setState({
			name:"Aymen",
			age : 4
		})
	}


render(){
  return (
    <div className="App">
      <h1>Hello react {test_class()}</h1>
      <Child/>
      <h3>Test Funtion without arrow function {this.Test("yes of course without arrow function")}</h3>
      <h3>Test Funtion With arrow function {this.Test_2("yes of course with arrow function")}</h3>
      <button onClick={this.click_handle}>Click</button>
      <button onMouseOver={this.hover_function}>Hover</button>
      <button onClick={this.name_state}>Afficher le nom sur state</button>
      <h1>{this.state.name}</h1>
      <h2>{this.state.age}</h2>
      <button onClick={this.change_state}>Change State (modifier)</button>
    </div>
  );
}
}

export default App;
