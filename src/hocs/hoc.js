import React from 'react';

export default function hoc(WrappedComponent) {
  return function(props) {
    return <WrappedComponent name="zach" {...props} />;
  };
}
