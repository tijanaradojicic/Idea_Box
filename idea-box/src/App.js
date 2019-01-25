import React, { Component } from 'react';
import HeaderComponent from './headerComponent'
import FormComponent from './formComponent'
import IdeaComponent from './ideaComponent'
import SearchComponent from './searchComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ideas:[],
    }
  }

  addIdea = (idea) => {
    idea = {
      ...idea,
      id: this.state.ideas.length+1
    }
    this.setState({ideas:[...this.state.ideas, idea], quality:"swill"},()=>{
      localStorage.setItem("ideas",JSON.stringify(this.state.ideas))
    })
  }

  deleteIdea = (idea) => {
    return (event) => {
      const temp = {
        ...this.state.ideas
    } 
      const ideaArray = Object.values(temp);
      delete temp[ideaArray.indexOf(idea)];
      this.setState({
        ideas: Object.values(temp)
    },()=>{
      localStorage.setItem("ideas",JSON.stringify(this.state.ideas))
    })
    }
  }

  filterIdeas = (search) => {
    const ideasArray=this.state.ideas.filter(idea => {
      return idea.title.includes(search)
    });
    this.setState({
      ideas: ideasArray
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
        <SearchComponent ideas={this.state.ideas} filterIdeas={this.filterIdeas}/>
        <IdeaComponent ideas={this.state.ideas} delete={this.deleteIdea} />
      </div>
    )
  }
}

export default App;



