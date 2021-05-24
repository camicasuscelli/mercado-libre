import React, {Component} from "react";
import stubedImage from '../images/Ipad-mini.jpeg'

export class ProductSearchResult extends Component {

	constructor(props){
		super(props);
		this.onClickProduct = this.onClickProduct.bind(this);
	}

	async onClickProduct(){
		console.log("Onclickproduct id:");
		this.props.callback(this.props.data.id);
	}

	render(){
		return(
			<div onClick={this.onClickProduct} style={{background: "white",margin:1, height:300, width:"50%", display: "flex"}}>
				<img style={{margin:20}} src={this.props.data.picture} alt="product image" width="250" height="250"/>
				<div style={{width:500, margin:30}}>
					<p id="price">{this.props.data.price.amount}</p>
					<p id="product-name">{this.props.data.title}</p>
				</div>
				<p id="location" style={{margin:20}}>{this.props.data.location}</p>
			</div>
		);
	}
}
