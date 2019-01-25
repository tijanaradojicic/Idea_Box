import React from 'react';

class IdeaItem extends React.Component {

    state={
        quality:"swill"
    }

    handleRateUp = () => {
        if(this.state.quality==="swill"){
          this.setState({
            quality: "plausible"
          })
        }
        else if(this.state.quality==="plausible"){
          this.setState({
            quality: "genius"
          })
        }
      }

      handleRateDown = () => {
        if(this.state.quality==="plausible"){
          this.setState({
            quality: "swill"
          })
        }
        else if(this.state.quality==="genius"){
          this.setState({
            quality: "plausible"
          })
        }
      }

    render(){
        return(
            <div className="idea">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <button className="delete-button" onClick={this.props.delete(this.props.idea)}>X</button>
                <div className="rate">
                <button className="rateUp" onClick={this.handleRateUp}><i className="fas fa-arrow-up"></i></button>
                <button className="rateDown" onClick={this.handleRateDown}><i className="fas fa-arrow-down"></i></button>  
                <p className="quality">{this.state.quality}</p>                  
                </div>
            </div>
        )
    }
}


class IdeasComponent extends React.Component {
    render(){
        const ideasList=this.props.ideas.map(idea=>{
            return <IdeaItem handleAdd={this.props.handleAdd} idea={idea} title={idea.title}  delete={this.props.delete} description={idea.description} key={idea.id} />
        })
        return (
            <div className="ideasList">
            {ideasList}
            </div>
        )
    }
    
}

export default IdeasComponent;