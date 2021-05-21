import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import {SearchBox} from './search_box/search_box.js';
import {SearchResult} from './search_result/search_result.js';
import { ProductDetail } from './product_detail/product_detail.js';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {useLocation} from "react-router";

const history = createBrowserHistory();

function ProductDetailFunction(appCallback){

  const {state} =useLocation();
  console.log("productdetailfunction");
  console.log(state);
  return(
    <div>
      <ProductDetail id = {state.id} url="http://localhost:9000/testAPI/items/"/>
    </div>
  );
}

function SearchResultFunction(appCallback) {

    const {search} = useLocation();
    const match = search.match(/search=(.*)/);
    const query = match?.[1];
    return (
        <div>
            <SearchResult queryInfo={query} callback={appCallback} url="http://localhost:9000/testAPI/items?q="/>
        </div>
    );
}

class App extends Component {
  //const history = useHistory();
  constructor(props) {
      super(props);
      this.state = { isSearchDone: false, searchResponse: "" };
      this.searchBoxCallback  = this.searchBoxCallback.bind(this);
      this.redirectProductDetail = this.redirectProductDetail.bind(this);
      //history = useHistory();
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  async componentDidMount() {
    //this.state.test = false
    //console.log(this.props);
      //this.callAPI();
      //const url = "http://localhost:9000/testAPI/items"; //"https://api.mercadolibre.com/sites/MLA/search?q=:query"
      //const response = await fetch(url);
      //console.log(response);
      //const data = await response.json();
      //console.log(data);

      //    <div className="App">
      //<header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
      //  <a
      //    className="App-link"
      //    href="https://reactjs.org"
      //    target="_blank"
      //    rel="noopener noreferrer"
      //  >
      //    Learn React
      //  </a>
      //</header>
  }

  searchBoxCallback(value){
    //console.log(response);

    //this.setState("MLA772921213",
    //  {
    //    searchResponse: response,
    //    isSearchDone: true
    //} );
    //var url = '/items?search=' + value;
    //history.push({
    //  pathname: '/items',
    //  query: { search: {value} } });
    //history.push(url);

    const params = new URLSearchParams()
    if (value) {
      params.append("search", value)
    } else {
      params.delete("search")
    }
    history.push({pathname:'/items',search: params.toString()});

  }
  //<Route path="/items/:id">
  //             <SearchBox callback = {this.searchBoxCallback}/>
  //         </Route>
  redirectProductDetail(ids){
    console.log("redirectProductDetail");
    console.log(ids);
    history.push({pathname:'/items/'+ids,state: {id: ids}});
    //history.push('/items/'+ids );
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
    if(this.state.isSearchDone){
      return (
        <div>
          <p className="App-intro">{this.state.apiResponse}</p>
          <SearchBox callback = {this.searchBoxCallback.bind(this)} />
          <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <SearchResult data = {this.state.searchResponse}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
