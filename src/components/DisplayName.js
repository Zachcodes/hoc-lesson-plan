import React from 'react';
import hoc from '../hocs/hoc';

function DisplayName(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.hello}</h4>
    </div>
  );
}

export default hoc(DisplayName);
