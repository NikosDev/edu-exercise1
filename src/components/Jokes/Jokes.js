import React, { Component } from "react";

class Jokes extends Component {
  state = {
    jokes: null,
    loading: false,
    searchTerm: ''
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes(){
    fetch('http://api.icndb.com/jokes/random/20')
      .then(result => result.json())
      .then(result => this.setState({jokes: result.value}))
      .catch(error => console.error('Error:', error))
  }

  search(event){
    if(event.target.value == ''){
      this.fetchJokes()
    }else{
      let result = this.state.jokes.filter(function (el) {
        return (el.joke.includes(event.target.value))
      });
      this.setState({jokes: result})
      }
  }

  updateInputValue(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
  }

  render() {
    return (
      <div>
      <div className="form-group float-right">
        <input type="search" className="form-control" value={this.state.searchTerm} onChange={evt => this.updateInputValue(evt)} onKeyPress={event => {if (event.key === 'Enter') {this.search(event)} }}/>
      </div>
      <div className="h6">
        {this.state.jokes !== null? 
            this.state.jokes.map((element, i) => {
            return <h6 key={i} className="p-2">{element.joke}</h6>
            }) : (<div className="spinner-border text-primary" role="status" aria-hidden="true"></div>)
        }
      </div>
      </div>
    )
  }
}

export default Jokes;
