import React from 'react';

class IdeaItem extends React.Component {
    render(){
        return(
            <div className="idea">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}


class IdeasComponent extends React.Component {
    render(){
        const ideasList=this.props.ideas.map(idea=>{
            return <IdeaItem handleAdd={this.props.handleAdd} title={idea.title} description={idea.description}/>
        })
        console.log(ideasList)
        return (
            <div className="ideasList">
            {ideasList}
            </div>
        )
    }
    
}

export default IdeasComponent;