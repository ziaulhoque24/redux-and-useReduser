import React, { useReducer } from 'react';

const UseReducerExam = () => {
    const initialValue = {count: 100, age : 20};
    const reducer = (state, action)=>{
        switch (action.type){
            case "increment":
                return {...state, count: state.count +1}
            case 'decrement':
                return {...state,count: state.count - 1};
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            Count: {state.count}
            <br/>
            <br/>
            age : {state.age}
      <button onClick={() => dispatch({type: 'decrement'})}>increment</button>
      <button onClick={() => dispatch({type: 'increment'})}>decrement</button>
        </div>
    );
};

export default UseReducerExam;