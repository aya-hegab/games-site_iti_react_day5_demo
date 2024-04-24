import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseCounter,
    increaseCounter,
    increaseCounterByVal,
} from "../store/slices/counter";
import CounterContext from "../context/counter";

export default function Counter() {
    // TO READ VALUE FROM REDUX STORE
    const counter_val = useSelector((state) => state.counter.counter_val);
    // TO UPDATE VALUE 
    const dispatch = useDispatch();

    const { counter, setCounter } = useContext(CounterContext)
    return (
        <>
            <h2>Counter Redux</h2>
            <hr />
            <div className="d-flex my-3 align-items-center">
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(decreaseCounter())}
                >
                    -1
                </button>
                <p className="mb-0 mx-4"> {counter_val} </p>
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(increaseCounter())}
                >
                    +1
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={() => dispatch(increaseCounterByVal(10))}
                >
                    +10
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(increaseCounterByVal(15))}
                >
                    +15
                </button>
            </div>
            <hr />

            <h2>Counter Context</h2>
            <hr />

            <div className="d-flex my-3 align-items-center">
                <button
                    className="btn btn-danger"
                    onClick={() => setCounter(counter - 1)}
                >
                    -1
                </button>
                <p className="mb-0 mx-4"> {counter} </p>
                <button
                    className="btn btn-success"
                    onClick={() => setCounter(counter + 1)}
                >
                    +1
                </button>
            </div>
        </>
    );
}
