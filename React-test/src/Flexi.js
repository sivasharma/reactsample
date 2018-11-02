import React, { Component } from "react";


/* this retunrs the child item to display the user entered values and same json structured is passed
  from where the new values are extracted */
const RenderChild = props => {
  {
    console.log(JSON.stringify(props));
    return props.prop.items.map(function(data, index) {
      return <div style={{ margin: 10 }}> 
      {data.label}
      </div>;
    });
  }
};

const Flexi = props => {
  return (
    <div>
      <button
        class="ui primary button"
        role="button"
        onClick={() => props.onSubmit()}
      >
        Submit
      </button>

      <RenderChild prop={props.conf} />
    </div>
  );
};
export default Flexi;
