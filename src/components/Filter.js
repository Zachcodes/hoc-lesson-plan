import React, { Component } from 'react';
import withData from '../hocs/withData';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      let filtered;
      if (this.state.search)
        filtered = this.props.originalPeople.filter(
          p =>
            p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      else filtered = this.props.originalPeople;
      this.props.setPeople(filtered);
    });
  };

  render() {
    return (
      <div>
        <p>
          Search:{' '}
          <input
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </p>
        {this.props.people.map(p => {
          return (
            <div key={p.id}>
              <p>Name: {p.name}</p>
              <p>{p.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withData(Filter);
