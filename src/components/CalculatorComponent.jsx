import React, { Component } from 'react';
import ApiService from '../service/ApiService';

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
            firstOperand: displayValue,
            displayValue: '0',
        });
    };

    handleEqualsClick = () => {
        const { displayValue, operator, firstOperand } = this.state;
        const secondOperand = displayValue;
        const data = {
            firstOperand: firstOperand,
            secondOperand: secondOperand
        };


        switch (operator) {
            case '+':
                ApiService.addition(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            case '-':
                ApiService.subtraction(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            case '*':
                ApiService.multiplication(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            case '/':
                ApiService.division(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            case '√':
                ApiService.squareRoot(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            case 'r':
                ApiService.randomString(data)
                    .then((res) => {
                        this.handleResult(res.data);
                    }).catch(error => {
                    this.handleError(error);
                });
                break;
            default:
                return;
        }


    };

    handleResult(data){
        this.setState({
            displayValue: data.toString(),
            operator: null,
            firstOperand: data,
        });
    }

    handleError(error){
        console.error(error);
    }

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
