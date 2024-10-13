import React from 'react';
import { useCounter } from '@/hooks/Context';
import ButtonText from '@/molecules/ButtonText';
import debounce from '@/libs/debounce';

export default function CounterView() {
    const { value, inc, dec } = useCounter();

    const debouncedIncrement = React.useCallback(debounce(inc, 300), [inc]);
    const debouncedDecrement = React.useCallback(debounce(dec, 300), [dec]);

    return (
        <div>
            <ButtonText handlers={{inc: debouncedIncrement, dec: debouncedDecrement}} value={value} />
        </div>
    );
};