import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        ...otherProps
    } = props

    return (
        <button
            type='button'
            className={clsx(className, 'button', theme && `button--${theme}`)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
