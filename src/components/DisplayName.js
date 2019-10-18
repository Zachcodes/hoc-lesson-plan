import React from 'react';
import hoc from '../hocs/hoc';

function DisplayName(props) {
  console.log(3, props);
  return (
    <div>
      <h1>Name from hoc: {props.name}</h1>
      <h4>Title from App: {props.title}</h4>
    </div>
  );
}

export default hoc(DisplayName);
