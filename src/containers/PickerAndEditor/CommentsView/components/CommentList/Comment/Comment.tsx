import React, { FC } from "react"
import './Comment.css'

export interface CommentListProps {
    value: string 
}

const Comment: FC<CommentListProps> = ({value}) => {
    return <div className="comment-container">
        {value}
    </div>
}

export default Comment