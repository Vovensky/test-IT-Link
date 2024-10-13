import { ReactNode } from 'react'


export type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
}

export type TextProps = {
    value: number;
}

export type ButtonText = {
    handlers: {
        [key: string]: () => void
    },
    value: number;
}

export type CounterContextType = {
    value: number;
    inc: () => void;
    dec: () => void;
}

export type CounterProviderProps = {
    children: ReactNode;
}

