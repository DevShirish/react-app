import React, { FC } from "react"
import Comment from './Comment'

export interface CommentListProps {
    comments: any[]
}

const CommentList: FC<CommentListProps> = ({comments}) => {
    return <div className="comment-list-container">
        {(comments || []).map((comment) => <Comment key={comment.id} value={comment.value} />)}
    </div>
}

export default CommentList