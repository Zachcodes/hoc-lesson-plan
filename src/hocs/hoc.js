import React from 'react';

export default function hoc(WrappedComponent) {
  console.log(1, WrappedComponent)
  return function(props) {
    console.log(2, props)
    return <WrappedComponent name="zach" {...props} />;
  };
}
