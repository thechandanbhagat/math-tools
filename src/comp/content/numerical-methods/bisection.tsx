import React, { CSSProperties, useState } from "react";
import { EditableMathField } from "react-mathquill";

const equationWrapperStyle: CSSProperties = {
  fontSize: "48px",
  position: "relative",
  display: "table",
  marginLeft: "auto",
  marginRight: "auto",
};
const equationInputStyle: CSSProperties = {
  fontSize: "48px",
  alignSelf: "center",
  textAlign: "center",
  border: "none",
  alignContent: "center",
};

const equationOutputStyle: CSSProperties = {
  fontSize: "16px",
  color: "rgb(232, 62, 140)",
  textAlign: "center",
  border: "none",
  alignContent: "center",
};
const centerBlock:CSSProperties={
    display:"table",
    margin:"0 auto"
}

function Bisection() {
  const [raw, setRaw] = useState("2*(x^2)+3*x-5");
  const [Result, setResult] = useState("");
  const [Eqn, setEqn] = useState("2x^2+3x-5");
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card elevation-5">
          <div className="card-header">
            <h3 className="card-title">Bisection</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="maximize"
              >
                <i className="fas fa-expand"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              {/* form to get input of bisection from user and show the result */}
              <div id="eq" style={equationWrapperStyle}>
                <div className="col-md-12 col-lg-6">
                  <EditableMathField
                    style={equationInputStyle}
                    className="mathquill-example-field"
                    latex={Eqn}
                    onChange={(equation) => {
                      setRaw(equation.text());
                      setEqn(equation.latex());
                    }}
                  />
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="row">
                
                <div className="col-12">
                    <h3 style={centerBlock}>Coming soon</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bisection;
