import axios from 'axios';
import './App.css';
import { Component } from 'react';
import ReadContent from './components/ReadContent';
import SearchContent from './components/SearchContent';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome'
    }
  }

  getContent(){
    var _article = null;
    if(this.state.mode === 'welcome'){
      _article = <ReadContent></ReadContent>
    }else if(this.state.mode === 'read'){
      _article = <ReadContent></ReadContent>
    }
    return _article;
  }

  render(){
    return (
      <div className="App">
        <SearchContent onSubmit={function(_name){
          axios.get("http://localhost:8080/api/character/symbol", {
            params:{
              characterName: _name
            }
          }).then(response =>{
            console.log(response.data);
          });
        }}></SearchContent>
        {this.getContent()}
      </div>
    )
  }
  

}

export default App;