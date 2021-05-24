import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/mercadolibre.png';

export class SearchBox extends Component {

	constructor(props){
		super(props);
		this.state = { 'searchquery': ''}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e){
		this.props.callback(this.state.searchquery);
	}

	onInputChange(e){
		this.state.searchquery = e.target.value;
	}
	render(){
		return(

			<div style={{background: "gold", display: 'flex', justifyContent:'center', alignItems:'center'}}>
				<form style={{width:"100%", height:"30%", display:'flex', justifyContent:'center', alignItems:'center'}}>
					<img src={logo} width="5%" />
					<input
			            type="text"
			            id="header-search"
			            placeholder="Nunca dejes de buscar"
			            name="query"
			            style = {{width:"30%"}}
			            onChange = {this.onInputChange.bind(this)}
			        />
			        <button type="button" onClick={this.handleSubmit}>
								<FontAwesomeIcon icon={faSearch} />
							</button>
				</form>
			</div>
		);
	}
}
