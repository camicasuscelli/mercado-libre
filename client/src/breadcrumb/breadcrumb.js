import React, {Component} from "react";
import '../styles/mercadolibre_styles.css';

export class Breadcrumb extends Component {

	render(){
     var categories = this.props.categories.map((category, index) =>
       <div key={index} style={{margin:"20px 0px 20px 0px"}}>
          <span className="dim-grey-small-font">{category}</span>
          <span className="dim-grey-small-font" style={{margin:10}}>|</span>
        </div>
      );
			return(<div className="lightgrey-background horizontal-align" style={{alignContent: 'space-between'}}>{categories}</div>);
    }
}
