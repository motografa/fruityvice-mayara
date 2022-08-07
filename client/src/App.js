import React from "react";
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    // .then(res => res.text())
    .then(res => console.log(res))
    .then(res => this.setState({apiResponse: res}));
    
    
    // let res = axios.get('https://fruityvice.com/api/fruit/all');
    // let data = res;
    // console.log(data);
    // this.setState({apiResponse: data})
  }
  
  componentWillMount(){
    this.callAPI();
  }
  
  
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <p>{this.state.apiResponse}</p>
    </div>
  );
  }
}

export default App;
