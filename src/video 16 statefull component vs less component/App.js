import React , {Component} from 'react';
import Child from './Child';

import './App.css';

class App extends Component {

	state = {
		name : "Mehdi"
	}


	render(){

		return(

			// video 16 FullState  vs LessState
			// Full state : khas tkon component Class o fiha state mdeclarer
			// LessState :khas tkon function ola class ghir ma tkon fiha 7ta state


			<div className="App">


			<Child test={this.state.name} />
			</div>

		)

	}

}

export default App;
