import React, {Component} from "react";

export class SearchBox extends Component {

	constructor(props){
		super(props);
		this.state = { 'searchquery': ''}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e){
		//if (this.state.searchquery){
		//	//call api
		//	const url = "http://localhost:9000/testAPI/items?q="+this.state.searchquery; //"https://api.mercadolibre.com/sites/MLA/search?q=:query"
      	//	const response = await fetch(url);
      	//	//console.log(response);
      	//	const data = await response.json();
      	//	//TODO está imprimiendo antes de que devuelva el valor D:
      	//	//console.log("cami" + response);
      	//	this.props.callback(data);
		//}
		this.props.callback(this.state.searchquery);
	}

	onInputChange(e){
		this.state.searchquery = e.target.value;
	}
	render(){
		//action="http://localhost:9000/api/items" method="POST"
		return(

			<div style={{background: "yellow"}}>
				<form >
					<label>
						<span> Simbolo ML </span>
					</label>
					<input
			            type="text"
			            id="header-search"
			            placeholder="Nunca dejes de buscar"
			            name="query"
			            style = {{width:700}}
			            onChange = {this.onInputChange.bind(this)} 
			        />
			        <button type="button" onClick={this.handleSubmit}>Search</button>
				</form>
			</div>
		);
	}
}