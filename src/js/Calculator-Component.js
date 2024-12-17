import React from 'react';
import '../css/calculator.css';

const Calculator = () => {
return(
    <div className='calculator'>
        <div className="display">
            <span className='display-text'>0</span>
        </div>
        <div className="buttons">
            <button>%</button>
            <button>C</button>
            <button>←</button>
            <button>÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>0</button>
            <button>.</button>
            <button className="equals">=</button>
        </div>
    </div>
);
}

export default Calculator;

