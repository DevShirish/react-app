import { FC, lazy, Suspense } from "react";
import NOOB from "../../../../../components/NOOB";
import Popup from "../../../../../components/Popup";

const CommentsView = lazy(() => import("../../../CommentsView/container/CommentsView"))

export interface CommentViewerPopupProps {
  trigger: JSX.Element;
  layerId: string
}

const CommentViewerPopup: FC<CommentViewerPopupProps> = ({ trigger, layerId }) => {
  return (
    <Popup trigger={trigger}>
      <Suspense fallback={<NOOB/>}>
      <CommentsView layerId={layerId} />
      </Suspense>
    </Popup>
  );
};

export default CommentViewerPopup;
