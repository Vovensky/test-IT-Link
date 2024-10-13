
import React from 'react';
import Button from '@/atoms/Button';
import Text from '@/atoms/Text';
import { ButtonText as ButtonTextProps } from '@/interfaces/types'
import classes from '@/styles/ButtonText.module.css'



function ButtonText ({ handlers, value }: ButtonTextProps) {
    const [inc, dec] = Object.keys(handlers)
    return (
        <div className={classes.buttonText}>
            <Button onClick={handlers[dec]}>{dec}</Button>
            <Text value={value} />
            <Button onClick={handlers[inc]}>{inc}</Button>
        </div>
    );
};

export default ButtonText;