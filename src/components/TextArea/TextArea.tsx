import { DOMAttributes, FC } from "react"

export interface InputProps {
    value: string
    onChange?: DOMAttributes<HTMLTextAreaElement>['onChange'] 
    rows: number
}

const TextArea: FC<InputProps> = ({value, onChange}) => {
    return <div>
        <textarea value={value} onChange={onChange} />
    </div>
}

export default TextArea