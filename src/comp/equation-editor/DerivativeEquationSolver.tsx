import { derivative } from "mathjs";
import { IEquationSolver } from "./IEquationSolver";

class DerivativeEquationSolver implements IEquationSolver{
    Solve(equation: string): string {
        var cleaned=this.equationCleaner(equation);
        var res=derivative(cleaned[3],cleaned[2]);
        return res.toString();
    }

    equationCleaner(equation: string): string[] {
        equation=equation.replace(/(\()([*+/^-])/g, '$1');
        var pattern =/(\(d\))\/(\(d\*[a-zA-Z0-9]+\))(\([a-zA-Z0-9*^+\-/.\(\)\[\]\{\}]+\))/g;
        var reg=new RegExp(pattern);
        var base=equation.replace(reg, '$2').replace(/(\(d\*)([a-zA-Z0-9]+)(\))/g, '$2');
        return [equation.replace(reg, '$1'), equation.replace(reg, '$2'),base, equation.replace(reg, '$3')];
    }

}

export default DerivativeEquationSolver;