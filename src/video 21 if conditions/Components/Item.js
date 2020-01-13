import React , {Component} from 'react';



class Items extends Component{

		

	render(){

			const {data_valeu_props} = this.props;
			const view_users = data_valeu_props.map((view_item)=>{


				return view_item.count>1 ?

				(

					<div key={view_item.id}>
						<p>id <b>est :</b> {view_item.id}</p>
						<p>Nom <b>est :</b> {view_item.name}</p>
						<p>Age <b>est :</b> {view_item.age}</p>
						<p>Count <b>est :</b> {view_item.count}</p>
						<hr/>
					</div>


				)



				 : null








			})
			return (
				<div className="myItemClass">
					<h1>Hello bo9al ana f componenet item</h1>
					{console.log(data_valeu_props)}
					{view_users}
				</div>

			)

			
		
	}

}

export default Items;