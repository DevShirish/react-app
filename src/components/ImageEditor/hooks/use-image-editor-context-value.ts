import { useCallback, useState } from "react";
import DEFAULT_TOOL_MAP from '../constants/default-tool-map';
import { IImageEditorContext } from "../context/image-editor-context";
import Layer from "../models/Layer";
import ToolMap from "../models/ToolMap";

export interface ImageEditorContextInput {
    defaultTool?: string
    customTools?: ToolMap
    element?: HTMLDivElement,
    disabled?: boolean,
    layers?: Layer[]
    onLayerAdd?: (layer: Layer, layers: Layer[]) => void
}

const useImageEditorContextValue = ({
 defaultTool,
 customTools,
 disabled = false,
 layers: inputLayers,
 onLayerAdd
}: ImageEditorContextInput): IImageEditorContext => { 
    const [selectedTool, selectTool] = useState(defaultTool)
    const [layers, updateLayers] = useState(inputLayers)
    const [element, setElement] =useState<HTMLDivElement>()
    const updateLayer = useCallback((layer) => {
        // TO DO: write logic to update layer if position is updated or dimension are updated
    }, [layers])
    const addLayer = useCallback((layer) => {
        updateLayers((prevLayers) => [...(prevLayers || []), layer])
        onLayerAdd?.(layer, layers || [] as Layer[])
    }, [layers])
    return {
        selectedTool: selectedTool || defaultTool || '',
        selectTool,
        tools: {...DEFAULT_TOOL_MAP, ...customTools},
        element,
        disabled,
        layers,
        updateLayers,
        updateLayer,
        addLayer,
        setElement
    }
}

export default useImageEditorContextValue