import { FC } from "react";
import { AutoSizer } from "react-virtualized";
import "./Editor.css";
import { useDispatch, useSelector } from "react-redux";
import ImageIcon from "../../../../../components/Icon/containers/ImageIcon";
import { LOCATION_ICON } from "../../../../../assets";
import CommentViewerPopup from "../../components/CommentViewerPopup";
import Dimension from "../../../../../components/ImageEditor/models/Dimension";
import ToolMap from "../../../../../components/ImageEditor/models/ToolMap";
import { add, selectLayers } from "../../../../../stores/layer";
import ImageEditor from "../../../../../components/ImageEditor";
import ImageEditorToolElement from "../../../../../components/ImageEditor/models/ImageEditorToolElement";

/**
 * Component for Location/pin Icon
 */
const PinIcon = () => <ImageIcon src={LOCATION_ICON} size={18} />;

export interface EditorProps {
  src: string;
}

/**
 * This method will calculate 
 * 
 * @returns - dimesion
 */
const getDimension = (width: number, height: number, aspectRatio: number): Dimension => {
  if (width * (1 / aspectRatio) > height) {
    return {
      width: height * aspectRatio,
      height,
    };
  }
  if (height * aspectRatio > width) {
    return {
      width,
      height: (width * 1/aspectRatio),
    };
  }
  return {
    width,
    height,
  };
};

const CommentterElement: FC<ImageEditorToolElement> = ({layer}) => {
    return <CommentViewerPopup trigger={<div className="animate"><PinIcon/></div>} layerId={layer.id as string}/>
}

const Tools: ToolMap = {
  commenter: {
    label: "Add Comment",
    toolbarIcon: PinIcon,
    defaultDimension: { width: 18, height: 18 },
    element: CommentterElement,
  },
};

const Editor: FC<EditorProps> = ({ src }) => {
  const dispatch = useDispatch()
  const layers = useSelector(selectLayers)
  return (
    <div className="editor-container">
      {/** Autosizer will help for responsiveness design and specifically to show you how image editor is responsive. */}
      <AutoSizer>
        {({ width, height }) => (
          <div
            className="editor-container-autosizer-content"
            style={{ width, height }}
          >
            <ImageEditor
              src={src}
              customTools={Tools}
              tools={["commenter"]}
              dimension={getDimension(width, height, 4/3)}
              layers={layers}
              onLayerAdd={(layer, layers) => dispatch(add({layer}))}
            />
          </div>
        )}
      </AutoSizer>
    </div>
  );
};

export default Editor;
