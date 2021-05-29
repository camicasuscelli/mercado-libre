import React, {Component} from "react";
import '../styles/mercadolibre_styles.css';

export class ProductDetail extends Component {
	constructor(props){
		super(props);
		this.getProductDetails();
		this.state ={data:false};
	}

	async getProductDetails(){
		console.log("Product detail - getProductDetails");
		const url = this.props.url+ this.props.id;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({data:data});
	}

	render(){
		if (this.state.data){
			return(
				<div class="horizontal-align lightgrey-background">
					<div class="horizontal-align white-background white-container-margin white-container-width">
						<div class = "product-width">
							<img class = "small-image-size" src={this.state.data.item.picture} alt="product"/>
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
							<button id="buy" class="buy-button dodgerblue" type="button">Comprar</button>
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
