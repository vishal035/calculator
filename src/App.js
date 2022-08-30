import React, { useState, useReducer } from 'react';
import './App.css';
import Card from './components/Main/Card';
import Button from './components/Button/Button';

const CalOperations = ['=', '+', '-', 'x', '⨬', '%', '⨦', 'AC'];

const reducerFN = (state, action) => {
  if (action.type === 'FIRST_INPUT') {
    return {
      FirstInput:
        state.FirstInput.trim().length < 0
          ? action.FirstInput
          : state.FirstInput + action.FirstInput,
      Operation: state.Operation,
      SecondInput: state.SecondInput,
      result: '',
    };
  }

  if (action.type === 'OPERATION') {
    return {
      FirstInput: state.FirstInput,
      Operation: action.operation,
      SecondInput: state.SecondInput,
      result: '',
    };
  }

  if (action.type === 'SECOND_INPUT') {
    return {
      FirstInput: state.FirstInput,
      Operation: state.Operation,
      SecondInput:
        state.SecondInput.trim().length < 0
          ? action.SecondInput
          : state.SecondInput + action.SecondInput,
      result: '',
    };
  }

  if (action.type === 'RESULT') {
    const first = Number(state.FirstInput);
    const second = Number(state.SecondInput);
    const operator = state.Operation;

    switch (operator) {
      case '+':
        return {
          FirstInput: state.FirstInput,
          Operation: state.Operation,
          SecondInput: state.SecondInput,
          result: `${first + second}`,
        };
      case '-':
        return {
          FirstInput: state.FirstInput,
          Operation: state.Operation,
          SecondInput: state.SecondInput,
          result: `${first - second}`,
        };
      case 'x':
        return {
          FirstInput: state.FirstInput,
          Operation: state.Operation,
          SecondInput: state.SecondInput,
          result: `${first * second}`,
        };
      case '⨬':
        return {
          FirstInput: state.FirstInput,
          Operation: state.Operation,
          SecondInput: state.SecondInput,
          result: `${(first / second).toFixed(2)}`,
        };
      case '%':
        return {
          FirstInput: state.FirstInput,
          Operation: state.Operation,
          SecondInput: state.SecondInput,
          result: `${((first / 100) * second).toFixed(2)}`,
        };

      default:
        break;
    }
  }

  if (action.type === 'RESET') {
    return {
      FirstInput: '',
      Operation: '',
      SecondInput: '',
      result: '',
    };
  }

  return {
    FirstInput: state.FirstInput,
    Operation: state.Operation,
    SecondInput: state.SecondInput,
    result: '',
  };
};

function App() {
  const [inputToggel, setInputToggel] = useState('first');

  const [calculator, calculatorOperationDispatch] = useReducer(reducerFN, {
    FirstInput: '',
    Operation: '',
    SecondInput: '',
    result: '',
  });

  const onClickHandler = (event) => {
    let currentOperation = event.target.innerText;
    /** Calc Operation assingment */
    if (CalOperations.includes(currentOperation)) {
      // console.log(currentOperation);
      if (currentOperation !== '=' && currentOperation !== '⨦')
        calculatorOperationDispatch({
          type: 'OPERATION',
          operation: currentOperation,
        });

      // console.log(currentOperation);
      if (calculator.FirstInput.trim().length > 0) setInputToggel('second');
    }

    /** Cal Result */
    if (currentOperation === '=' && CalOperations.includes(currentOperation)) {
      console.log(currentOperation);
      calculatorOperationDispatch({
        type: 'RESULT',
        operation: currentOperation,
      });

      // if (calculator.FirstInput.trim().length > 0) setInputToggel('second');
    }

    /** Cal reset */
    if (currentOperation === 'AC' && CalOperations.includes(currentOperation)) {
      console.log(currentOperation);
      calculatorOperationDispatch({
        type: 'RESET',
      });

      setInputToggel('first');
    }

    /** Assigning -value as first argument  */
    if (currentOperation === '⨦' && CalOperations.includes(currentOperation)) {
      console.log(currentOperation);
      calculatorOperationDispatch({
        type: 'FIRST_INPUT',
        FirstInput: '-',
      });

      setInputToggel('first');
    }

    if (inputToggel === 'first' && !CalOperations.includes(currentOperation)) {
      calculatorOperationDispatch({
        type: 'FIRST_INPUT',
        FirstInput: event.target.innerText,
      });
      if (CalOperations.includes(currentOperation)) setInputToggel('second');
    }

    if (inputToggel === 'second' && !CalOperations.includes(currentOperation)) {
      calculatorOperationDispatch({
        type: 'SECOND_INPUT',
        SecondInput: event.target.innerText,
      });
      // Return to new State or for Further Calculation
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <Card className="relative flex flex-col w-96 h-24 justify-end bg-primary-black text-primary text-4xl font-semibold">
        <Card className="absolute top-0 right-0 w-fit py-2 px-4 ">
          {calculator.result}
        </Card>
        <Card className="absolute right-0 py-2 px-4 w-fit font-medium text-2xl">
          {`${calculator.FirstInput} ${calculator.Operation} ${
            calculator.SecondInput
          }${
            calculator.result.trim().length > 0 ? ` = ${calculator.result}` : ''
          }`}
        </Card>
      </Card>
      <Card
        onClick={onClickHandler}
        className=" relative grid grid-cols-4 w-96 h-[520px] bg-primary-black text-primary-white text-4xl font-normal"
      >
        <Button name="AC" className="text-primary">
          AC
        </Button>
        <Button name="⨦">⨦</Button>
        <Button name="%">%</Button>
        <Button name="⨬" className="text-primary bg-slate-800">
          ⨬
        </Button>
        <Button name="7">7</Button>
        <Button name="8">8</Button>
        <Button name="9">9</Button>
        <Button name="x" className="text-primary bg-slate-800">
          x
        </Button>
        <Button name="4">4</Button>
        <Button name="5">5</Button>
        <Button name="6">6</Button>
        <Button name="-" className="text-primary bg-slate-800">
          -
        </Button>
        <Button name="1">1</Button>
        <Button name="2">2</Button>
        <Button name="3">3</Button>
        <Button name="+" className="text-primary bg-slate-800">
          +
        </Button>
        <Button name="0">0</Button>
        <Button name=".">.</Button>
        <Button
          name="="
          className="text-primary bg-slate-800 col-span-2 py-2 px-4"
        >
          =
        </Button>
        {/* <Button className="text-primary bg-slate-800">=</Button> */}
      </Card>
    </div>
  );
}

export default App;
