import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/mercadolibre.png';
import '../styles/mercadolibre_styles.css';

export class SearchBox extends Component {

	constructor(props){
		super(props);
		this.state = { 'searchquery': ''}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e){
		console.log("Search box - handleSubmit()");
		console.log(this.state.searchquery);
		if(this.state.searchquery!==''){
			this.props.callback(this.state.searchquery);
		}
	}

	onInputChange(e){
		this.setState({'searchquery': e.target.value});
	}

	render(){
		return(

			<div className="horizontal-align center yellow-background">
				<form className="horizontal-align center full-width">
					<img className="logo-width" src={logo} alt="mercado libre" />
					<input
			            type="text"
			            id="header-search"
			            placeholder="Nunca dejes de buscar"
			            name="query"
			            className = "search-input-width"
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
