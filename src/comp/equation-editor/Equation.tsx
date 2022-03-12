import React, { CSSProperties, useState } from "react";
import { EditableMathField } from "react-mathquill";
import NormalEquationSolver from "./NormalEquationSolver";



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
const outputStyle: CSSProperties = {
  fontSize: "24px",
  color: "rgb(232, 62, 140)",
  textAlign: "center",
  border: "1px dashed #000",
  alignContent: "center",
};

const placeholderOutputStyle: CSSProperties = {
  fontSize: "20px",
  display: "table",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
};

function Equation() {
  function handleSubmit(event: any) {
    event.preventDefault();
    setEqn(TextEqn);
    console.log(TextEqn);
    console.log("eqn => " + Eqn);
  }

  const [TextEqn, setTextEqn] = useState("");
  const [raw, setRaw] = useState("(1)/(2)+(1)/(2)");
  const [Result, setResult] = useState("");
  const [Eqn, setEqn] = useState("\\frac{1}{2}+\\frac{1}{2}");
  return (
    <div className="card elevation-5">
      <div className="card-header">
        <div className="card-title">Solve the fractions</div>
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
        <div className="container-fluid">
          <div className="row">
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
          <div className="col-md-12 col-lg-6"></div>
            <EditableMathField
              latex={Result}
              className="mathquill-example-field"
              style={equationInputStyle}
              // contentEditable="false"
            />
            </div>
           
            <p style={equationOutputStyle}>
              {/* <span>latex: </span>
              <strong>
                <code>{Eqn}</code>
              </strong> */}
            </p>
            <p style={equationOutputStyle}>
              {/* <span>raw: </span>
              <strong>
                <code>{raw}</code>
              </strong> */}
            </p>
          </div>
          </div>
         
        
        </div>
        
     
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <button onClick={Solve} className="btn btn-outline-primary">
              Solve
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function Solve() {
    var equate = new NormalEquationSolver();
    var solved = equate.Solve(raw);
    setResult("= "+solved);
  }
}

export default Equation;