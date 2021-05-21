import React, {Component} from "react";
import stubedImage from '../images/Ipad-mini.jpeg'

export class ProductDetail extends Component {
	constructor(props){
		super(props);
		//console.log("product detail id:");
		//console.log(this.props.id);
		this.getProductDetails();
		this.state ={data:false};
	}

	async getProductDetails(){
		const url = this.props.url+ this.props.id;
		const response = await fetch(url);
		//console.log(response);
		const data = await response.json();
		//TODO está imprimiendo antes de que devuelva el valor D:
		console.log("	async getProductDetails()");
		console.log(data);
		this.setState({data:data});
	}

	render(){
		if (this.state.data){
			return(
				<div style={{background: "white", width:700, display: "flex"}}>
					<div style={{width:500}}>
						<img src={this.state.data.item.picture} alt="product image" width="500" height="500"/>
						<p id="description-title">{this.state.data.item.title}</p>
						<p id="description">{this.state.data.item.description}</p>
					</div>
					<div style={{width:500}}>
						<p id="product-state">{this.state.data.item.condition}</p>
						<p id="amount-available">{this.state.data.item.sold_quantity}</p>
						<p id="price">{this.state.data.item.price.amount}</p>
						<button type="button" style={{background:"dodgerblue", border:"none", color:"white",padding:"15px"}}>Comprar</button>
					</div>
				</div>
			);
		}else
		{
			return(<div>Cargando</div>);
		}
	}
}
