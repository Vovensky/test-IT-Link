import { TextProps } from '@/interfaces/types'
import classes from '@/styles/Text.module.css'


export default function Text({ value } : TextProps) {
    return <div className={classes.text}> { value }</div>
}