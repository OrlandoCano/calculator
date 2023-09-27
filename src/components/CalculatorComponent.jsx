import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            displayValue: '0',
            operator: null,
            firstOperand: null,
        };
    }

    handleDigitClick = (digit) => {
        const { displayValue } = this.state;

        if (displayValue === '0') {
            this.setState({ displayValue: digit });
        } else {
            this.setState({ displayValue: displayValue + digit });
        }
    };

    handleOperatorClick = (operator) => {
        const { displayValue } = this.state;
        this.setState({
            operator,
            firstOperand: parseFloat(displayValue),
            displayValue: '0',
        });
    };

    handleEqualsClick = () => {
        const { displayValue, operator, firstOperand } = this.state;
        const secondOperand = parseFloat(displayValue);
        let result = 0;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            case '√':
                result = Math.sqrt(firstOperand);
                break;
            default:
                return;
        }

        this.setState({
            displayValue: result.toString(),
            operator: null,
            firstOperand: result,
        });
    };

    handleClearClick = () => {
        this.setState({
            displayValue: '0',
            operator: null,
            firstOperand: null,
        });
    };

    render() {
        const { displayValue } = this.state;

        return (
            <div className="calculator">
                <div className="display">{displayValue}</div>
                <div className="buttons">
                    <div className="row">
                        <button className="btn btn-danger col-sm" onClick={() => this.handleClearClick()}>C</button>
                        <button className="btn btn-info col-sm" onClick={() => this.handleOperatorClick('√')}>√</button>
                        <button className="btn btn-info col-sm" onClick={() => this.handleOperatorClick('r')}>Random</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('1')}>1</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('2')}>2</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('3')}>3</button>
                        <button className="btn btn-orange col-sm" onClick={() => this.handleOperatorClick('+')}>+</button>

                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('4')}>4</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('5')}>5</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('6')}>6</button>
                        <button className="btn btn-orange col-sm" onClick={() => this.handleOperatorClick('-')}>-</button>


                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('7')}>7</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('8')}>8</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('9')}>9</button>
                        <button className="btn btn-orange col-sm" onClick={() => this.handleOperatorClick('*')}>*</button>


                    </div>
                    <div className="row">
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('0')}>0</button>
                        <button className="btn btn-secondary col-sm" onClick={() => this.handleDigitClick('.')}>.</button>
                        <button className="btn btn-success col-sm" onClick={() => this.handleEqualsClick()}>=</button>
                        <button className="btn btn-orange col-sm" onClick={() => this.handleOperatorClick('/')}>/</button>


                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
