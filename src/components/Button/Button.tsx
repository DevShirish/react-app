import React, { DOMAttributes, FC } from "react";
import './Button.css'

export interface ButtonProps {
    label: string
    disabled?: boolean
    onClick?: DOMAttributes<HTMLButtonElement>['onClick']
}

const Button: FC<ButtonProps> = ({label, onClick}) => {
    return <div>
        <button className="button-container" onClick={onClick}>{label}</button>
    </div>
}

export default Button