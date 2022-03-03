import { IEquationSolver } from "./IEquationSolver";

class NormalEquationSolver implements IEquationSolver {
  Solve(equation: string): string {
    var separated = equation.split("+");
    var first = separated[0].replace("\\frac", "");
    var second = separated[1].replace("\\frac", "");
    return this.calculateFractions(first, second);
  }

  calculateFractions(first: string, second: string): string {
    var a = first.split("}{")[0].replace("{", "");
    var b = first.split("}{")[1].replace("}", "");
    var c = second.split("}{")[0].replace("{", "");
    var d = second.split("}{")[1].replace("}", "");
    var numerator = parseInt(a) * parseInt(d) + parseInt(b) * parseInt(c);
    var denominator = parseInt(b) * parseInt(d);
    var gcd = this.gcd(numerator, denominator);
    console.log("numerator : "+numerator);
    console.log("denominator : "+denominator);
    console.log("gcd : "+gcd);
    var result = numerator / denominator;
    return "\\frac{"+(numerator/gcd)+"}{"+(denominator/gcd)+"}";
  }

  //calculate the gcd of two numbers
    gcd(a: number, b: number): number {
        if (b == 0)
            return a;
        else
            return this.gcd(b, a % b);
    }


  ///function to display all the prime number between 1 to 100
    primeNumber(number : number) : any[]{
        var prime = [];
        for (var i = 2; i <= number; i++) {
            var flag = 0;
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                }
            }
            if (flag == 0) {
                prime.push(i);
            }
        }
        return prime;
    }
    //latex string solve the math fraction numbers
    

}
export default NormalEquationSolver;
