import React, {Component} from "react";
import stubedImage from '../images/Ipad-mini.jpeg'

export class ProductSearchResult extends Component {

	constructor(props){
		super(props);
		//console.log(this.props.data);
		this.onClickProduct = this.onClickProduct.bind(this);
		console.log("camiprint search result");
	}

	async onClickProduct(){
		//call api
		//console.log(this.props.data)
		//const url = "http://localhost:9000/testAPI/items/"+ this.props.data.id;
		//const response = await fetch(url);
		//console.log(response);
		//const data = await response.json();
		//TODO está imprimiendo antes de que devuelva el valor D:
		console.log("camiprint onclick");
		//console.log(data);
		this.props.callback(this.props.data.id);
	}

	render(){
		return(
			<div onClick={this.onClickProduct} style={{background: "white", width:700, display: "flex"}}>
				<img src={this.props.data.picture} alt="product image" width="300" height="300"/>
				<div style={{width:500}}>
					<p id="price">{this.props.data.price.amount}</p>
					<p id="product-name">{this.props.data.title}</p>
				</div>
				<p id="location">{this.props.data.location}</p>
			</div>
		);
	}
}
