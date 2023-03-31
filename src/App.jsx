import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      input: "0"
    };
    this.addInput = this.addInput.bind(this);
    this.calculateExp = this.calculateExp.bind(this);
  }

  addInput(event) {
    console.log(event.target.innerText);

    if (event.target.innerText == "AC") {
      this.setState({
        expression: "",
        input: "0"
      });
    } else if (event.target.innerText == "=") {
      this.setState((state) => ({
        input: this.calculateExp(this.state.input)
      }));
      console.log(event.target);
    } else if (event.target.innerText == ".") {
      let expression = this.state.input.split(/[+\-/X]/g);
      console.log(
        "in decimal, exp = ",
        expression,
        expression[expression.length - 1]
      );
      console.log(
        "contains . ",
        expression[expression.length - 1].includes(".")
      );
      console.log(this.state.input.split(/[+\-/X]/g));
      if (expression[expression.length - 1].includes(".")) {
        console.log("already contains .");
      } else if (this.state.input[this.state.input.length - 1] == ".") {
        console.log("2 .....");
      } else {
        console.log("in decimal else");
        this.setState((state) => ({
          input: state.input + "."
        }));
      }
    } else {
      if (this.state.input == 0) {
        this.setState({
          expression: "",
          input: ""
        });
      }
      switch (event.target.innerText) {
        case "X": {
          console.log(
            "in X",
            this.state.input,
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          );
          if (
            ["X", "/"].includes(
              this.state.input[this.state.input.length - 2]
            ) &&
            this.state.input[this.state.input.length - 1] == "-"
          ) {
            console.log(
              " in / else if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 2) + "X"
            }));
          } else if (
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          ) {
            console.log(
              " in X if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 1) + "X"
            }));
          } else {
            this.setState((state) => ({
              input: state.input + "X"
            }));
          }
          break;
        }
        case "/": {
          console.log(
            "else if condition",
            this.state.input,
            this.state.input[this.state.input.length - 2],
            ["X", "/"].includes(
              this.state.input[this.state.input.length - 2]
            ) && this.state.input[this.state.input.length - 1] == "-"
          );
          if (
            ["X", "/"].includes(
              this.state.input[this.state.input.length - 2]
            ) &&
            this.state.input[this.state.input.length - 1] == "-"
          ) {
            console.log(
              " in / else if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 2) + "/"
            }));
          } else if (
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          ) {
            console.log(
              " in / if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 1) + "/"
            }));
          } else {
            this.setState((state) => ({
              input: state.input + "/"
            }));
          }
          break;
        }
        case "+": {
          console.log(
            "in /",
            this.state.input,
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          );
          if (
            ["X", "/"].includes(
              this.state.input[this.state.input.length - 2]
            ) &&
            this.state.input[this.state.input.length - 1] == "-"
          ) {
            console.log(
              " in / else if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 2) + "+"
            }));
          } else if (
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          ) {
            console.log(
              " in / if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 1) + "+"
            }));
          } else {
            this.setState((state) => ({
              input: state.input + "+"
            }));
          }
          break;
        }
        case "-": {
          console.log(
            "in /",
            this.state.input,
            ["-", "+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            )
          );
          if (
            ["-", "+"].includes(this.state.input[this.state.input.length - 1])
          ) {
            console.log(
              " in / if",
              this.state.input.substring(0, this.state.input.length - 1)
            );
            this.setState((state) => ({
              input: state.input.substring(0, state.input.length - 1) + "-"
            }));
          } else {
            this.setState((state) => ({
              input: state.input + "-"
            }));
          }
          break;
        }
        default:
          console.log("sub string", this.state.input.substring(1));
          if (
            this.state.input.length == 2 &&
            ["+", "X", "/"].includes(
              this.state.input[this.state.input.length - 2]
            )
          ) {
            this.setState((state) => ({
              input: state.input.substring(1) + event.target.innerText
            }));
          } else if (
            ["+", "X", "/"].includes(
              this.state.input[this.state.input.length - 1]
            ) &&
            this.state.input.length == 1
          ) {
            this.setState((state) => ({
              input:
                state.input.substring(0, state.input.length - 1) +
                event.target.innerText
            }));
          } else {
            this.setState((state) => ({
              expression: state.expression + event.target.innerText,
              input: state.input + event.target.innerText
            }));
          }
      }
    }
  }

  calculateExp(exp) {
    let returnVal;
    let values = exp
      .split(/[+\-/X]/g)
      .map((value) => Number(value))
      .filter((value) => value != 0);
    console.log("values", values);
    console.log(exp.match(/\D*/g).filter((val) => val != "" && val != "."));
    let operators = exp
      .match(/\D*/g)
      .filter((val) => val != "" && val != ".")
      .map((val) => {
        if (val.length == 1) return val;
        else if (
          val[val.length - 1] == "-" &&
          !["+", "-"].includes(val[val.length - 2])
        )
          return val[val.length - 2] + val[val.length - 1];
        else return val[val.length - 1];
      });
    console.log(
      "ops",
      operators,
      operators.length >= values.length && exp[0] != "-"
    );

    operators.length > values.length && operators.pop();
    operators.length >= values.length && exp[0] != "-" && operators.pop();
    console.log("ops", operators);

    if (operators.length > 0) {
      let expression = [];
      values.forEach((val, index) => {
        console.log(operators[0][operators[0].length - 1] == "-");
        if (
          values.length == operators.length &&
          operators[0][operators[0].length - 1] == "-"
        ) {
          expression.push(operators[index]);
          expression.push(val);
        } else {
          expression.push(val);
          if (operators[index]) {
            expression.push(operators[index]);
          }
        }
      });

      if (expression[0] == "-") {
        expression.shift();
        expression[0] = -expression[0];
      }
      console.log(exp, values, operators, expression);

      expression.forEach((val, index) => {
        if (typeof val === "string" && val.length == 2) {
          console.log(val);
          expression[index] = expression[index][0];
          expression[index + 1] = -expression[index + 1];
        }
      });

      console.log(exp, values, operators, expression);

      let output = expression
        .map((val, index) => {
          if (typeof val === "string" && !["-", "+"].includes(val)) {
            console.log(expression[index - 1], val, expression[index + 1]);
            if (val == "X")
              return expression[index - 1] * expression[index + 1];
            if (val == "/")
              return expression[index - 1] / expression[index + 1];
          } else {
            return val;
          }
        })
        .filter((val, index, arr) => {
          if (!expression.includes(val)) {
            return true;
          } else if (
            typeof val == "number" &&
            (typeof arr[index - 1] == "number" ||
              typeof arr[index + 1] == "number")
          ) {
            return false;
          } else {
            return true;
          }
        })
        .reduce((acc, cVal, index, arr) => {
          console.log(
            "reduce",
            index,
            acc,
            cVal,
            arr[index + 1],
            arr[index + 2]
          );
          if (cVal == "+") return acc + arr[index + 1];
          if (cVal == "-") return acc - arr[index + 1];
          return acc;
        });
      returnVal = output;
      console.log(output);
    }
    return returnVal ? returnVal : exp;
  }

  render() {
    let { input, expression } = this.state;
    return (
      <div className="container-fluid">
        <div className="row main-row d-flex justify-content-center align-content-center">
          <div className="col-3 calculator rounded-3 shadow p-4">
            <div className="screens mb-3">
              {/*<div className="text-end bg-light p-2 ">{expression}</div> */}
              <div className="text-end bg-light p-2 fs-4 fw-bold" id="display">
                {input}
              </div>
            </div>
            <div className="buttons">
              <div className="row my-1">
                <div className="col-6 p-1">
                  <button
                    className="btn btn-danger w-100 h-100 fs-5 fw-bolder"
                    id="clear"
                    onClick={this.addInput}
                  >
                    AC
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-warning w-100 h-100 fs-5 fw-bolder"
                    id="divide"
                    onClick={this.addInput}
                  >
                    /
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-warning w-100 h-100 fs-5 fw-bolder"
                    id="multiply"
                    onClick={this.addInput}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="row my-1">
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="seven"
                    onClick={this.addInput}
                  >
                    7
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="eight"
                    onClick={this.addInput}
                  >
                    8
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="nine"
                    onClick={this.addInput}
                  >
                    9
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-warning w-100 h-100 fs-3 fw-bolder"
                    id="subtract"
                    onClick={this.addInput}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row my-1">
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="four"
                    onClick={this.addInput}
                  >
                    4
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="five"
                    onClick={this.addInput}
                  >
                    5
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                    id="six"
                    onClick={this.addInput}
                  >
                    6
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    className="btn btn-warning w-100 h-100 fs-4 fw-bolder"
                    id="add"
                    onClick={this.addInput}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row my-1">
                <div className="col-9">
                  <div className="row">
                    <div className="col-4 p-1">
                      <button
                        className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                        id="one"
                        onClick={this.addInput}
                      >
                        1
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button
                        className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                        id="two"
                        onClick={this.addInput}
                      >
                        2
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button
                        className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                        id="three"
                        onClick={this.addInput}
                      >
                        3
                      </button>
                    </div>
                  </div>
                  <div className="row my-1">
                    <div className="col-8  p-1">
                      <button
                        className="btn btn-secondary w-100 h-100 fs-5 fw-bolder"
                        id="zero"
                        onClick={this.addInput}
                      >
                        0
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button
                        className="btn btn-secondary w-100 h-100 fs-4 fw-bolder"
                        id="decimal"
                        onClick={this.addInput}
                      >
                        .
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-3 pt-1 px-1 pb-2">
                  <button
                    className="btn btn-success w-100 h-100 fs-3 fw-bolder"
                    id="equals"
                    onClick={this.addInput}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;