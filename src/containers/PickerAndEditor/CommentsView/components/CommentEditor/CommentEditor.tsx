import React, { FC, useState } from "react";
import Button from "../../../../../components/Button";
import TextArea from "../../../../../components/TextArea";
import './CommentEditor.css';

export interface CommentEditorProps {
    onConfirm: (value: string) => void
}

const CommentEditor: FC<CommentEditorProps> = ({onConfirm}) => {
    const [value, setValue] = useState('')
    return <div className="comment-editor-container">
        <div>
            <TextArea value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} rows={5}/>
        </div>
        <div>
            <Button disabled={!value} label="Add" onClick={() => {
                onConfirm(value)
                setValue('')
            }}/>
        </div>
    </div>
}

export default CommentEditor