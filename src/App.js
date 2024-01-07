import axios from 'axios';
import './App.css';
import { Component } from 'react';
import ReadContent from './components/ReadContent';
import SearchContent from './components/SearchContent';
import HeaderContent from './components/HeaderContent';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      contents: []
    }
  }

  getContent(){
    var _article = null;
    if(this.state.mode === 'read'){
      _article = <ReadContent contents={this.state.contents}></ReadContent>
    }
    return _article;
  }

  render(){
    return (
      <div className="App">
        <HeaderContent></HeaderContent>
        <SearchContent onSubmit={function(_name){
          axios.get("http://localhost:8080/api/character/symbol", {
            params:{
              characterName: _name
            }
          }).then(response =>{
            var _contents = response.data;
            this.setState({
              mode: 'read',
              contents: _contents 
            });
          });
        }.bind(this)}></SearchContent>
        {this.getContent()}
      </div>
    )
  }
}

export default App;