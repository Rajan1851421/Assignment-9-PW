import React, { useState } from 'react';

function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setResult(result + value);
    };

    const handleClear = () => {
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(result));
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calBody">
            <div className="calculator">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2"><input type="text" id="resultView" value={result} readOnly /></td>
                            <td><button id="clear" onClick={handleClear}>Clear</button></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><button type="button" className="calculator-btn" onClick={() => handleClick('+')}>+</button></td>
                            <td colSpan='2'><button type="button" className="calculator-btn" onClick={handleCalculate}>=</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" className="calculator-btn" onClick={() => handleClick('*')}>*</button></td>
                            <td><button type="button" className="calculator-btn" onClick={() => handleClick('-')}>-</button> </td>
                            <td><button type="button" className="calculator-btn" onClick={() => handleClick('/')}>/</button></td>
                        </tr>

                        <tr>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('1')}>1</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('2')}>2</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('3')}>3</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('4')}>4</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('5')}>5</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('6')}>6</button></td>
                        </tr>
                        <tr>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('7')}>7</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('8')}>8</button></td>
                            <td><button type="button" className="calculator-button" onClick={() => handleClick('9')}>9</button></td>
                        </tr>
                        <tr>
                            <td colSpan="3"><button type="button" className="calculator-button" onClick={() => handleClick('0')}>0</button></td>
                        </tr>
                    </tbody>



                </table>


            </div>
        </div>
    );
}

export default Calculator;
