import { FC } from "react";
import NOOB from "../../../../NOOB";
import useImageEditorContext from "../../../hooks/use-image-editor-context";
import Layer from "../../../models/Layer";
import './LayerWrapper.css';

export interface LayerWrapperProps {
    layer: Layer;
}

const toPercent = (value: number) => {
    return `${value * 100}%`
}

const LayerWrapper: FC<LayerWrapperProps> = ({layer}) => {
    const {tools} = useImageEditorContext()
    let ToolElement = tools[layer.tool]?.element || NOOB
    return <div className="layer-wrapper-container" style={{left: toPercent(layer.position.x), top: toPercent(layer.position.y)}} onClick={e => e.stopPropagation()}>
        <ToolElement layer={layer}/>
    </div>
}

export default LayerWrapper