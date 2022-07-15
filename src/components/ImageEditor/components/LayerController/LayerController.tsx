import { FC, MouseEvent } from "react";
import useImageEditorContext from "../../hooks/use-image-editor-context";
import Layer from "../../models/Layer";
import "./LayerController.css";
import LayerWrapper from "./LayerWrapper";

export interface LayerControllerProps {
  layers?: Layer[];
}

const LayerController: FC<LayerControllerProps> = ({ layers }) => {
  const { addLayer, selectedTool, element, tools } = useImageEditorContext();
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const containerElePosition = element?.getBoundingClientRect();
    addLayer({
      position: {
        x:
          (e.pageX -
            (containerElePosition?.x || 0) -
            ((tools?.[selectedTool]?.defaultDimension?.width as number) || 10) /
              2) /
          (containerElePosition?.width || 1),
        y:
          (e.pageY -
            (containerElePosition?.y || 0) -
            ((tools?.[selectedTool]?.defaultDimension?.height as number) ||
              10)) /
          (containerElePosition?.height || 1),
      },
      tool: selectedTool,
      dimension: tools?.[selectedTool]?.defaultDimension || {
        height: 10,
        width: 10,
      },
    });
  };
  return (
    <div className="layer-controller-container" onClick={handleClick}>
      {layers?.map((layer, index) => (
        <LayerWrapper key={index} layer={layer} />
      ))}
    </div>
  );
};

export default LayerController;
