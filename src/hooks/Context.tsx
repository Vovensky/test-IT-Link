import React, { createContext, useContext, useState } from 'react';

import { CounterContextType, CounterProviderProps } from '@/interfaces/types';

const CounterContext = createContext<CounterContextType | null>(null);

export const useCounter = () => {
    const context = useContext(CounterContext);
    if(!context) throw new Error('need a context')
    return context
};

export function CounterProvider({ children } : CounterProviderProps ) {
    const [value, setValue] = useState(0);

    const inc = () => setValue((state) => state + 1);
    const dec = () => setValue((state) => state - 1);

    return (
        <CounterContext.Provider value={{ value, inc, dec }}>
            {children}
        </CounterContext.Provider>
    );
};