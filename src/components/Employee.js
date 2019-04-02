import React, { Component } from "react";

export default class RootChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      dynamicTree: []
    };
  }

  handleSearchInput = event => {
    this.setState({ inputText: event.target.value });
  };

  addEmployee = () => {
    var ul = this.refs.dynamicTree;
    console.log(ul);
    // this.setState({ dynamicTree: {...dynamicTree} + {this.state.inputText}})
    console.log(this.state.inputText);
  };

  render() {
    return (
      <div className="RootTree-container">
        <section className="newEmployee">
          New Employee: <input type="text" onChange={this.handleSearchInput} />
          Reports to: <select />
          <button onClick={this.addEmployee}>Add Employee</button>
        </section>
        <section className="EmployeeTree">
          <ul className="dynamicTree" ref="dynamicTree">
            Company
            <li />
          </ul>
        </section>
      </div>
    );
  }
}
