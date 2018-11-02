import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import "./styles.css";
import Flexi from "./Flexi";

/*
Author:shiv
this class reads the json data and pass it as props to the clild component on  state change
it renders the new data that is pushed into the json item and displays the user entered values.
*/


//sample json data
const jsonResponse = {
  items: [
    {
      name: "person_name",

      label: "Person's Name",

      type: "TextField"
    },

    {
      name: "state",

      label: "Person's state",

      type: "DropDown",

      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};


//base class to render UI
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: jsonResponse,
      selectedItem: "",
      userName: ""
    };

    this.handleItems.bind(this);
    this.handlerUserNameChange.bind(this);
    this.handleDropdownChange.bind(this);
  }


/*this function reads the json elements and renders the UI on the screen based on the
component  it has read */

  handleItems = () => {
    return this.state.jsonData.items.map(data => {
      return (
        <div style={{ margin: 10 }}>
          <tr>
            <td>
              {data.name}
              {": "}

              {data.type === "TextField" ? (
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handlerUserNameChange}
                />
              ) : (
                <div style={{ marginTop: 10 }}>
                  <select
                    onChange={this.handleDropdownChange}
                    value={event.target.value}
                  >
                    {data.values.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </td>
          </tr>
          <tr />
        </div>
      );
    });
  };

  /*this holds the user name chaneges etting emitted from input field */
  handlerUserNameChange = event => {
    this.setState({ userName: event.target.value });
    
  };

  
  /* this handles the buuton click event */
  handleButtonClick = () => {
    console.log("button clicked");
    let newState = Object.assign({}, jsonResponse);
    newState.items[0].label = this.state.userName;
    newState.items[1].label = this.state.selectedItem;
    console.log(JSON.stringify(this.state));
    this.setState({ jsonData: newState });
  }

   /* this handles the buuton click event */
  handleDropdownChange = event => {
    this.setState({ selectedItem: event.target.value });
  };
 
 /* render func to display the UI elelment*/
  render() {
    return (
      <div className="App">
        {this.handleItems()}

        <Flexi
          conf={this.state.jsonData}
          onSubmit={this.handleButtonClick.bind(this)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
