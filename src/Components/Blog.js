import React, {Component} from 'react';
import axios from 'axios'


class Blog extends Component{


	state = {
		users : []
	}

	componentDidMount(){
		axios.get("https://jsonplaceholder.typicode.com/users")
		.then(res => {
			console.log(res.data);
				this.setState({
					users:res.data
				})
		})
	}



	render(){
		{console.log(this.props)}
		let url = this.props.match.path

		const {users} = this.state
		const userList = users.map(user=>{
			return(

				<div className="content" key={user.id}>
				<p><b>First name : </b>{user.name}</p>
				<p><b>Last name : </b>{user.username}</p>
				</div>

			)
		})

		return(
			<div className='blog_class'>
				<h1>Section Blog Component</h1>
				<p>Blog Blog Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. Consectetur,
				temporibus nemo. Sit optio dolor, 
				consequuntur deserunt quisquam magni, 
				itaque doloremque?</p>
				<ul className="list_unstyled">
					<h1>Premier Methode</h1>
					{this.state.users.map(user => <li key={user.id}><b>{user.name}</b></li>)}
				</ul>
					<h1>Deuxieme methode</h1>
					{userList}

					<h1>afficher parameter de ROUTE</h1>
					{url}
			</div>
		)
	}
}

export default Blog;