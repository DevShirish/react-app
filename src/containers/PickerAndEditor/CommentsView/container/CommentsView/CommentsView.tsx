import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComment, selectCommentsByLayerId } from "../../../../../stores/layer"
import CommentEditor from "../../components/CommentEditor"
import CommentList from "../../components/CommentList"
import './CommentsView.css'

export interface CommentsViewProps {
    layerId: string
}

const CommentsView: FC<CommentsViewProps> = ({layerId}) => {
    const dispatch = useDispatch()
    const comments = useSelector(selectCommentsByLayerId(layerId))

    return <div className="comments-view-container">
        <CommentList comments={comments} />
        <CommentEditor onConfirm={(comment) => {dispatch(addComment({comment, layerId}))}}/>
    </div>
}

export default CommentsView