/**import React, { useState } from "react";
import ReactDatamaps from "react-india-states-map";

// Define state data with a more descriptive structure
const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  }
};

// Functional component
const Example = () => {
  // State to manage the currently active state and its details
  const [activeState, setActiveState] = useState({
    data: STATES.Maharashtra,
    name: "Maharashtra"
  });

  // State to manage all the state data
  const [stateLists] = useState(STATES);

  // Handle state click events
  const stateOnClick = (data, name) => {
    setActiveState({ data, name });
  };

  return (
    <ReactDatamaps
      regionData={stateLists}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#74407A",
        borderColor: "#A6509F",
        hoverColor: "#1b1c27",
        hoverBorderColor: "#74407A"
      }}
      hoverComponent={({ value }) => (
        <div>
          <p>{value.name}</p>
          <p>{value.content?.txt}</p> 
        </div>
      )}
      onClick={stateOnClick}
      activeState={activeState}
    />
  );
};

export default Example;**/



