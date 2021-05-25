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
				<div style={{background: "lightgrey", display:'flex', justifyContent:'center'}}>
					<div style={{background: "white", width:1000, display: "flex", justifyContent:'center', 'margin-top':50, 'margin-bottom':50}}>
						<div style={{width:700}}>
							<img src={this.state.data.item.picture} alt="product image" width="600" height="600"/>
							<span id="description-title" style={{'font-size':22}}>Descripción del producto</span>
							<p id="description">{this.state.data.item.description}</p>
						</div>
						<div style={{width:200}}>
							<div style={{display:'flex', 'margin-top':30, 'margin-bottom':10}}>
								<span id="product-state">{this.state.data.item.condition}</span>
								<span id="amount-available">- {this.state.data.item.sold_quantity} vendidos</span>
							</div>
							<span id="description-title" style={{ 'font-size':22, 'font-weight': 'bold'}}>{this.state.data.item.title}</span>
							<div style={{display:'flex', alignItems:'center', 'margin-top':10}}>
								<span id="price" style={{'font-size':34 }}>{this.state.data.item.price.amount}</span>
								<span id="decimals" style={{'font-size':24, 'margin-left':3}}>{this.state.data.item.price.decimals}</span>
							</div>
							<button type="button" style={{background:"dodgerblue", border:"none", color:"white",padding:"15px 70px", 'margin-top':20,'font-size':20, 'border-radius': 5}}>Comprar</button>
						</div>
					</div>
				</div>
			);
		}else
		{
			return(<div>Cargando</div>);
		}
	}
}
