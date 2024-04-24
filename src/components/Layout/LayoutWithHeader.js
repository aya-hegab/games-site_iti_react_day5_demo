import React, { useState } from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import CounterContext from '../../context/counter';

export default function LayoutWithHeader() {
    const [counter, setCounter] = useState(0)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            <Header />
            <div className='container my-5'>
                <Outlet />
            </div>
        </CounterContext.Provider>
    )
}
