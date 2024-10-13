import { ButtonProps } from '@/interfaces/types'
import classes from '@/styles/Button.module.css'


export default function Button({ onClick, children } : ButtonProps) {
    return <button type='button' onClick={onClick} className={classes.button}> {children} </button>
}