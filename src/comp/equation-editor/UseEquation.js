import EquationEditor from "equation-editor-react";
import React, { useState } from "react";

const UseEquation= (eq) =>{
    const [eqn, setEquation] = useState(eq);
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