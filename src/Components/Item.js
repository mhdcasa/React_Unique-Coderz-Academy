import React , {Component} from 'react';
import "./Item.css";

class Items extends Component{

		

	render(){

			const {data_valeu_props} = this.props;
			const view_users = data_valeu_props.map((view_item)=>{


				return view_item.count>0 ?

				(

					<div className="item_class" key={view_item.id}>
						<p className="id_user">id <b>est :</b> {view_item.id}</p>
						<p className="name_user">Nom <b>est :</b> {view_item.name}</p>
						<p className="age_user">Age <b>est :</b> {view_item.age}</p>
						<p className="count_user">Count <b>est :</b> {view_item.count}</p>
						<hr/>
					</div>


				)



				 : null








			})
			return (
				<div className="myItemClass">
					<h1>Hello bo9al ana f componenet item</h1>
					{/*{console.log(data_valeu_props)}*/}
					{view_users}
				</div>

			)

			
		
	}

}

export default Items;