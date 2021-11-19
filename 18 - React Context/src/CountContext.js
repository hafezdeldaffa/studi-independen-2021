import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();
const initState = { count: 0 };

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      // code here
      return { count: state.count++ };
    }
    case 'decrement': {
      // code here
      return { count: state.count-- };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  // useReducer
  const [state, dispatch] = useReducer(countReducer, initState);

  // Make variable `value` and assign state & dispatch
  const value = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const useCount = () => {
  // fill the default value of useContext
  const context = useContext(CountContext);

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export { CountProvider, useCount };
