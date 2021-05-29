import React, {Component} from "react";
import {SearchBox} from './search_box/search_box.js';
import {SearchResult} from './search_result/search_result.js';
import { ProductDetail } from './product_detail/product_detail.js';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {useLocation} from "react-router";
import './styles/mercadolibre_styles.css';

const history = createBrowserHistory();
//loads product details view
function ProductDetailFunction(appCallback){
  const {state} =useLocation();
  console.log("App - ProductDetailFunction");
  console.log(state);
  return(
    <div>
      <ProductDetail id = {state.id} url="http://localhost:9000/api/items/"/>
    </div>
  );
}
//loads search result view
function SearchResultFunction(appCallback) {
    const {search} = useLocation();
    console.log("App - SearchResultFunction");
    console.log(search);
    const match = search.match(/search=(.*)/);
    const query = match?.[1];
    return (
        <div>
            <SearchResult queryInfo={query} callback={appCallback} url="http://localhost:9000/api/items?q="/>
        </div>
    );
}

class App extends Component {

  searchBoxCallback(value){
    console.log("App - searchBoxCallback");
    const params = new URLSearchParams()
    if (value) {
      params.append("search", value)
    } else {
      params.delete("search")
    }
    history.push({pathname:'/items',search: params.toString()});

    //TODO see a better way of updating the page when a new search is done
    window.location.reload(false);
  }

  redirectProductDetail(ids){
    console.log("App - redirectProductDetail");
    console.log(ids);
    history.push({pathname:'/items/'+ids,state: {id: ids}});
  }

  render() {
    return(
      <div className="wrapper">
        <SearchBox callback = {this.searchBoxCallback}/>
        <Router history={history}>
          <Switch>
            <Route path="/items/:id" component={ProductDetailFunction}/>
            <Route path="/items:query?" component={() => SearchResultFunction(this.redirectProductDetail)}/>
            <Route path="/">
              <div/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
