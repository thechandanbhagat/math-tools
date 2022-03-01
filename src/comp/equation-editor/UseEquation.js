import EquationEditor from "equation-editor-react";
import React, { useState } from "react";

function UseEquation(props) {
    const [eqn, setEquation] = useState(props.equation);
    return (
      <EquationEditor
      value={eqn}
      onChange={setEquation}
      autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
      autoOperatorNames="sin cos tan"
    />
  );
  
  }

  export default UseEquation;