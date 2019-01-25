import React from 'react';

class SearchComponent extends React.Component {

    state = {
        search: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.search);
        this.props.filterIdeas(this.state.search);
    }

    render(){
        return(
            <div className="search">
                <input type="text" name="search" placeholder="Search" onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchComponent;