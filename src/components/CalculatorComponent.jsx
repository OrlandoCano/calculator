import React, { useState } from 'react';
import ApiService from '../service/ApiService';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstOperand, setFirstOperand] = useState(null);

    const handleDigitClick = (digit) => {
        if (displayValue === '0') {
            setDisplayValue(digit);
        } else {
            setDisplayValue(displayValue + digit);
        }
    };

    const handleOperatorClick = (op) => {
        setOperator(op);
        setFirstOperand(displayValue);
        setDisplayValue('0');
    };

    const handleEqualsClick = () => {
        const secondOperand = displayValue;
        const data = {
            firstOperand,
            secondOperand,
        };

        switch (operator) {
            case '+':
                ApiService.addition(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            case '-':
                ApiService.subtraction(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            case '*':
                ApiService.multiplication(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            case '/':
                ApiService.division(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            case '√':
                ApiService.squareRoot(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            case 'r':
                ApiService.randomString(data)
                    .then((res) => {
                        handleResult(res.data);
                    })
                    .catch(handleError);
                break;
            default:
                return;
        }
    };

    const handleResult = (data) => {
        setDisplayValue(data.toString());
        setOperator(null);
        setFirstOperand(data);
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstOperand(null);
    };

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="buttons">
                <div className="row">
                    <button className="btn btn-danger col-sm" onClick={() => handleClearClick()}>C</button>
                    <button className="btn btn-info col-sm" onClick={() => handleOperatorClick('√')}>√</button>
                    <button className="btn btn-info col-sm" onClick={() => handleOperatorClick('r')}>Random</button>
                </div>
                <div className="row">
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('1')}>1</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('2')}>2</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('3')}>3</button>
                    <button className="btn btn-orange col-sm" onClick={() => handleOperatorClick('+')}>+</button>

                </div>
                <div className="row">
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('4')}>4</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('5')}>5</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('6')}>6</button>
                    <button className="btn btn-orange col-sm" onClick={() => handleOperatorClick('-')}>-</button>


                </div>
                <div className="row">
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('7')}>7</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('8')}>8</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('9')}>9</button>
                    <button className="btn btn-orange col-sm" onClick={() => handleOperatorClick('*')}>*</button>


                </div>
                <div className="row">
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('0')}>0</button>
                    <button className="btn btn-secondary col-sm" onClick={() => handleDigitClick('.')}>.</button>
                    <button className="btn btn-success col-sm" onClick={() => handleEqualsClick()}>=</button>
                    <button className="btn btn-orange col-sm" onClick={() => handleOperatorClick('/')}>/</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

