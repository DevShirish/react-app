import { createContext } from "react";
import Layer from "../models/Layer";
import ToolMap from "../models/ToolMap";

export interface IImageEditorContext {
    selectedTool: string,
    tools: ToolMap,
    selectTool: (tool: string) => void
    element?: HTMLDivElement
    disabled?: boolean,
    layers?: Layer[],
    updateLayers: (layers: Layer[]) => void,
    updateLayer: (layer: Layer) => void
    addLayer: (layer: Layer) => void
    setElement: (element: HTMLDivElement) => void
}

const ImageEditorContext = createContext<IImageEditorContext>({} as IImageEditorContext)

export default ImageEditorContext