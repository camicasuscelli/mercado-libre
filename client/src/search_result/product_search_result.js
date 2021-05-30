import React, {Component} from "react";
import '../styles/mercadolibre_styles.css';

export class ProductSearchResult extends Component {

	constructor(props){
		super(props);
		this.onClickProduct = this.onClickProduct.bind(this);
	}

	async onClickProduct(){
		console.log("Product search result - Onclickproduct");
		this.props.callback(this.props.data.id);
	}

	render(){
		return(
			<div className="horizontal-align white-background" onClick={this.onClickProduct} style={{margin:1, height:300, width:800}}>
				<img style={{margin:20}} src={this.props.data.picture} alt="product" width="250" height="250"/>
				<div className="vertical-align start" style={{width:300, margin:'30px 10px'}}>
					<p id="price" style={{fontSize:20}}>{this.props.data.price.amount}</p>
					<p id="product-name"style={{fontSize:16}}>{this.props.data.title}</p>
				</div>
				<p id="location dim-grey-small-font" style={{margin:'80px 20px'}}>{this.props.data.location}</p>
			</div>
		);
	}
}
