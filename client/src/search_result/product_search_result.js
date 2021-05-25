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
			<div onClick={this.onClickProduct} style={{background: "white",margin:1, height:300, width:800, display: "flex", justifyContent:'center'}}>
				<img style={{margin:20}} src={this.props.data.picture} alt="product image" width="250" height="250"/>
				<div style={{display:'flex','flex-direction':'column', width:300, margin:'30px 10px', 'align-items':'flex-start'}}>
					<p id="price" style={{'font-size':20}}>{this.props.data.price.amount}</p>
					<p id="product-name"style={{'font-size':16}}>{this.props.data.title}</p>
				</div>
				<p id="location" style={{margin:'80px 20px', 'font-size':14, 'color':'dimgrey'}}>{this.props.data.location}</p>
			</div>
		);
	}
}
