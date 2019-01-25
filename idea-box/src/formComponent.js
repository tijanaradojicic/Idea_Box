import React from 'react';

class FormComponent extends React.Component {

    state={
        title:"",
        description:""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addIdea(this.state);
      } 

    render(){
        return(
            <div className="form">
                <form>

                    <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                    <input type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                    <button className="submit" onClick={this.handleSubmit}>Save</button> 

                </form>
            </div>
        )
    }
}

export default FormComponent;