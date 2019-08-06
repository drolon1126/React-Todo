import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitTask = e => {
    e.preventDefault();
    this.props.searchTask(this.state.task);
  }
  render() {
    return (
        <form onSubmit={this.submitTask}>
          <input
            type='text'
            value={this.state.task}
            name='task'
            onChange={this.handleChange}
            placeholder='Search...'
          />
          <button className="search-btn">
            Search
          </button>
        </form>
    );
  }
}


export default SearchForm;