import React from 'react';
import { CounterProvider } from '@/hooks/Context';
import CounterView from '@/view/CounterView';

export default function Counter() {
    return (
        <CounterProvider>
            <CounterView />
        </CounterProvider>
    );
};