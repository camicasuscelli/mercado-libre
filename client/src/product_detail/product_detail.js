import React, {Component} from "react";
import { Breadcrumb } from '../breadcrumb/breadcrumb.js'
import '../styles/mercadolibre_styles.css';

export class ProductDetail extends Component {
	constructor(props){
		super(props);
		this.state = {data:false};
	}

	async componentDidMount(){
		console.log("Product detail - getProductDetails");
		const url = this.props.url+ this.props.id;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({data:data});
	}

	render(){
		if (this.state.data){
			return(
				<div className="vertical-align lightgrey-background">
					<Breadcrumb categories={this.state.data.item.categories}/>
					<div className="horizontal-align lightgrey-background">
						<div className="horizontal-align white-background white-container-margin white-container-width">
							<div className = "product-width">
								<img className = "small-image-size" src={this.state.data.item.picture} alt="product"/>
								<span id="description-title" style={{fontSize:22}}>Descripción del producto</span>
								<p id="description">{this.state.data.item.description}</p>
							</div>
							<div style={{width:200}}>
								<div style={{display:'flex', marginTop:30, marginBottom:10}}>
									<span id="product-state">{this.state.data.item.condition}</span>
									<span id="amount-available">- {this.state.data.item.sold_quantity} vendidos</span>
								</div>
								<span id="description-title" style={{ fontSize:22, fontWeight: 'bold'}}>{this.state.data.item.title}</span>
								<div style={{display:'flex', alignItems:'center', marginTop:10}}>
									<span id="price" style={{fontSize:34 }}>{this.state.data.item.price.amount}</span>
									<span id="decimals" style={{fontSize:24, marginLeft:3}}>{this.state.data.item.price.decimals}</span>
								</div>
								<button id="buy" className="buy-button dodgerblue" type="button">Comprar</button>
							</div>
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
