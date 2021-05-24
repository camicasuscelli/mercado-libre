import React, { Component } from "react";
import { ProductSearchResult } from './product_search_result.js';
import { ProductDetail } from '../product_detail/product_detail.js';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Route, Switch, Router } from 'react-router-dom';
import { useLocation } from "react-router";

const history = createBrowserHistory();

export class SearchResult extends Component {

	constructor(props){
		super(props);

		this.state={querySearch:this.props.query, data:""}
		this.loadProductDetails = this.loadProductDetails.bind(this);

		this.callSearchApi();
	}

	async callSearchApi(){
		const url = this.props.url+this.props.queryInfo; //"https://api.mercadolibre.com/sites/MLA/search?q=:query"
		const response = await fetch(url);
		const responseData = await response.json();

		this.setState({data:responseData});
	}

	loadProductDetails(id){
		//we only have the id
		//call callback to have the id and route back to it.
		console.log("loadProductDetails");
		console.log(this.props);
		this.props.callback(id);
	}

	render(){
		if (this.state.data){
			var testing = this.state.data.items.map((product) =>
		      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
						<ProductSearchResult data = {product} callback = {this.loadProductDetails}/>
					</div>
		    	);
			console.log(testing);
			return (
				<div style={{background:"lightgrey"}}>
			   		{testing}
			    </div>);
		}else
		{
			return(
				<div>Buscando</div>
			);
		}
	}
	//render(){
	//	if (this.state.data && !this.state.isProductDetail){
	//		var testing = this.state.data.items.map((product) =>
	//		        	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
	//						<ProductSearchResult data = {product} callback = {this.loadProductDetails}/>
	//					</div>
	//		    	);
	//	}
	//	return(
	//	<div className="wrapper">
    //    	<Router history={history}>
    //    	  <Switch>
    //    	    <Route path="/">
	//		    	<div>
	//			   		{testing}
	//			    </div>;
    //    	    </Route>
    //    	    <Route path="/:id">
    //    	    	<ProductDetail data = {this.state.productDetail}/>
    //    	    </Route>
    //    	  </Switch>
    //    	</Router>
    //  </div>
    //  );
	//}
	////if (this.state.data) {
	//		if(this.state.isProductDetail){
	//			return (
	//				<div>
	//					<ProductDetail data = {this.state.productDetail}/>
	//				</div>
	//			);
	//		}else{
	//			console.log("camprint");
	//			//console.log(this.state.data.items);
	//			var testing = this.state.data.items.map((product) =>
	//	        	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
	//					<ProductSearchResult data = {product} callback = {this.loadProductDetails}/>
	//				</div>
	//	    	);
//
	//			console.log(testing);
	//			return (
	//				<div>
	//			   		{testing}
	//			    </div>);
	//		}
	//	}
	//	else{
	//		return(
	//			<div>hola</div>);
	//	}
}
