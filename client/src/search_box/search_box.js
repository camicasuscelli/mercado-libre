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
		this.props.callback(this.state.searchquery);
	}

	onInputChange(e){
		this.setState({'searchquery': e.target.value});
	}

	render(){
		return(

			<div class="horizontal-align center yellow-background">
				<form class="horizontal-align center full-width">
					<img class="logo-width" src={logo} alt="mercado libre" />
					<input
			            type="text"
			            id="header-search"
			            placeholder="Nunca dejes de buscar"
			            name="query"
			            class = "search-input-width"
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
