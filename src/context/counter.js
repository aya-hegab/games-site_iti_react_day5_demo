import { createContext } from "react";

const CounterContext = createContext();

export default CounterContext;

// Create context
// Wrap component <Context.Provider value={{ state, setState  }}>
// To read context value => const { state, setState } = useContext(Context)