import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderComponent from './headerComponent'
import FormComponent from './formComponent'
import IdeaComponent from './ideaComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ideas:[]
    }
  }

  addIdea = (idea) => {
    this.setState({ideas:[...this.state.ideas, idea]},()=>{
      localStorage.setItem("ideas",JSON.stringify(this.state.ideas))
    })
  }

  componentDidMount(){
    const ideas = localStorage.getItem("ideas");
    setTimeout(()=> {
      this.setState({
        ideas: JSON.parse(ideas || '[]')
      })
    },1000)
    
  }

  render(){
    return(
      <div className="container">
        <HeaderComponent />
        <FormComponent addIdea={this.addIdea}/>
        <IdeaComponent ideas={this.state.ideas}/>
      </div>
    )
  }
}

export default App;


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;*/
