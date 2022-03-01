import React from "react";
import ReactDOM from 'react-dom';
import UseEquation from "./UseEquation";

class Equation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  
  handleSubmit(event) {
    
    ReactDOM.render(<UseEquation equation={this.state.value} /> , document.getElementById("eq"));
    //var eqn=UseEquation();
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <form>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="button" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
        <div className="row" id="eq">
         
        </div>
      </div>
    );
  }
}

export default Equation;
