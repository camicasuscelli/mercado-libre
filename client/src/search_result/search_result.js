import React, { Component } from "react";
import { ProductSearchResult } from './product_search_result.js';
import { Breadcrumb } from '../breadcrumb/breadcrumb.js'
import '../styles/mercadolibre_styles.css';

export class SearchResult extends Component {

	constructor(props){
		super(props);

		this.state={querySearch:this.props.query, data:"", message:"Buscando"}
		this.loadProductDetails = this.loadProductDetails.bind(this);
	}

	async componentDidMount(){
		console.log("Search result - callSearchApi");
		console.log(this.props.queryInfo);
		const url = this.props.url+this.props.queryInfo;
		const response = await fetch(url);
		const responseData = await response.json();
		console.log(response.status);
		if(responseData.message){
			this.setState({message:responseData.message})
		}else{
			this.setState({data:responseData});
		}
	}

	loadProductDetails(id){
		console.log("loadProductDetails");
		console.log(this.props);
		this.props.callback(id);
	}

	render(){
		if (this.state.data){
			var items = this.state.data.items.map((product, index) =>
		      <div key={index} className="horizontal-align">
						<ProductSearchResult data = {product} callback = {this.loadProductDetails}/>
					</div>
		    	);
			console.log(items);
			return (
				<div>
					<Breadcrumb categories={this.state.data.categories}/>
					<div className="lightgrey-background" style={{padding:"10px 0px 30px 0px"}}>
						{items}
					</div>
			  </div>);
		}else
		{
			return(
				<div>{this.state.message}</div>
			);
		}
	}
}
