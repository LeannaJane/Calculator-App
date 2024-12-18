import React, { useState, useEffect, useRef } from 'react';
import '../css/calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);

    const displayRef = useRef(null); 

    const parseOperations = (expression) => {
        const mulDivPattern = /(\d+(\.\d+)?)\s*([x÷])\s*(\d+(\.\d+)?)/;
        let match;
        
        while ((match = mulDivPattern.exec(expression))) {
            const left = parseFloat(match[1]);
            const right = parseFloat(match[4]);
            const operator = match[3].trim();

            let result;
            if (operator === 'x') {
                result = left * right;
            } else if (operator === '÷') {
                result = left / right;
            }

            expression = expression.replace(match[0], result.toString());
        }

        const addSubPattern = /(\d+(\.\d+)?)(\s*[\+\-])\s*(\d+(\.\d+)?)/;
        while ((match = addSubPattern.exec(expression))) {
            const left = parseFloat(match[1]);
            const right = parseFloat(match[4]);
            const operator = match[3].trim();

            let result;
            if (operator === '+') {
                result = left + right;
            } else if (operator === '-') {
                result = left - right;
            }

            expression = expression.replace(match[0], result.toString());
        }

        return parseFloat(expression);
    };

    const handleClick = (value) => {
        if (value === "C") {
            setDisplay('0');
            setPrevValue(null);
            setOperation(null);
        }
        else if (value === '←') {
            setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
        }
        else if (value === '=') {
            try {
                const result = parseOperations(display);
                setDisplay(result.toString());
            } catch (e) {
                setDisplay('Error');
                console.log(e)
            }
            setPrevValue(null);
            setOperation(null);
        }
        else if (value === '%') {
            setDisplay((parseFloat(display) / 100).toString());
        }
        else if (['+', '-', 'x', '÷'].includes(value)) {
            setPrevValue(parseFloat(display));
            setOperation(value); 
            setDisplay(display + ' ' + value + ' ');
        }
        else {
            setDisplay(display === '0' ? value : display + value);
        }
    };

    useEffect(() => {
        if (displayRef.current) {
            const displayElement = displayRef.current;
            displayElement.scrollLeft = displayElement.scrollWidth;
        }
    }, [display]);

    return (
        <div className='calculator'>
            <div className="display" ref={displayRef}>
                <span className='display-text'>{display}</span> 
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('←')}>←</button>
                <button onClick={() => handleClick('÷')}>÷</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('x')}>x</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button className="equals" onClick={() => handleClick('=')}>=</button>
            </div>
        </div>
    );
}

export default Calculator;
