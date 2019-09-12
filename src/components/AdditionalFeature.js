import React from 'react';


const AdditionalFeature = props => {

  const buyItem = e => {
    console.log('bought item!');
    e.preventDefault()
    props.addFeature(props.feature)
    // dipsatch an action here to add an item
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature