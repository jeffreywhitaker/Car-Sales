import React from 'react';

const AddedFeature = props => {

  const removeFeature = e => {
    e.preventDefault()
    console.log('added feature props', props)
    props.removeFeature(props.feature.id)
    // dispatch an action here to remove an item
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
