import React, { Component } from 'react';

let people = [
  {
    name: 'John',
    age: 23,
    id: 1
  },
  {
    name: 'Ariel',
    age: 32,
    id: 2
  },
  {
    name: 'Rico',
    age: 42,
    id: 3
  }
];

export default function withData(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        originalPeople: people,
        people
      };
    }

    setPeople = people => {
      this.setState({ people });
    };

    render() {
      return (
        <WrappedComponent
          people={this.state.people}
          setPeople={this.setPeople}
          originalPeople={this.state.originalPeople}
          {...this.props}
        />
      );
    }
  };
}
