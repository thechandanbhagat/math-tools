import React, { CSSProperties, useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import NormalEquationSolver from "./NormalEquationSolver";

addStyles()

const equationWrapperStyle: CSSProperties = {
  fontSize: "48px",
  position: "relative",
  display: "table",

  marginTop: "5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const equationInputStyle: CSSProperties = {
  fontSize: "48px",
  alignSelf: "center",
  textAlign: "center",
  border:"none",
alignContent:"center",
};



const equationOutputStyle: CSSProperties = {
  fontSize: "16px",
  color: "rgb(232, 62, 140)",
  textAlign: "center",
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
  const [raw, setRaw] = useState("");
  const [Result, setResult] = useState("");
  const [Eqn, setEqn] = useState("y=x");
  return (
    <div className="container-fluid">
      <div className="row"></div>
      {/* <div className="row" style={placeholderOutputStyle}>
        Type the equation here
      </div> */}
      <div id="eq" style={equationWrapperStyle}>
        <EditableMathField
        style={equationInputStyle}
          className="mathquill-example-field"
          latex={Eqn}
          onChange={(equation) => {setRaw(equation.text()); setEqn(equation.latex());}}
          
        />
        <p style={equationOutputStyle}>
        
          <span>latex: </span>
          <strong>
            <code>{Eqn}</code>
          </strong>
        </p>
        <p style={equationOutputStyle}>
        
        <span>raw: </span>
        <strong>
          <code>{raw}</code>
        </strong>
      </p>
      </div>
      <button onClick={Solve} className="btn btn-outline-primary">Solve</button>
      <div className="row" style={placeholderOutputStyle}>
      {/* <EquationEditor
          value={Result}
          onChange={setResultNew}
          autoCommands="bar overline sqrt sum prod int alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omikron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Aelta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omikron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega rangle langle otimes neq leq ll geq gg approx dagger angle in"
          autoOperatorNames="sin cos tan"
        /> */}
        <EditableMathField
          latex={Result}
          contentEditable="false"
         />
        <div className="row">

     
        </div>
        </div>
    </div>
  );

  function Solve() {
    var equate=new NormalEquationSolver();
    var solved=equate.Solve(raw);
    
    setResult(solved);
  }
  
}


export default Equation;
