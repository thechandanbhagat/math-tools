import { all, create } from 'mathjs';
import { IEquationSolver } from "./IEquationSolver";

const config = { 
 
}
const math = create(all, config)
class NormalEquationSolver implements IEquationSolver {
  Solve(equation: string): string {
    var cleanedEquation = this.fractionCleaner(equation);
    var res=math.parse(cleanedEquation);
    var ratio=math.format(math.fraction(res.evaluate()), { fraction:'ratio'});
    console.log("Evaluate "+ratio);
    return this.resultCleaner(ratio);
    
  }
  resultCleaner(equation: string): string {
    var pattern=/(\d+)\/(\d+)/g;
    var regex = new RegExp(pattern);
    if(equation.endsWith("/1")){
      return equation.substring(0,equation.indexOf("/1"))
    }
    return equation.replace(regex, '\\frac{$1}{$2}');
  }

  fractionCleaner(equation: string): string {
    var pattern=/(\d+)(\(\d+\)\/\(\d+\))/g;
    var regex = new RegExp(pattern);
    return equation.replace(regex, '$1\+$2');
  }



  //calculate the gcd of two numbers
    gcd(a: number, b: number): number {
        if (b == 0)
            return a;
        else
            return this.gcd(b, a % b);
    }

}
export default NormalEquationSolver;
