import { FC, useEffect } from "react";
import LayerController, { LayerControllerProps } from "../../components/LayerController/LayerController";
import Toolbar from "../../components/Toolbar";
import { ToolbarProps } from "../../components/Toolbar/Toolbar";
import ImageEditorContext from "../../context/image-editor-context";
import useImageEditorContextValue from "../../hooks/use-image-editor-context-value";
import Dimension from "../../models/Dimension";
import Layer from "../../models/Layer";
import './ImageEditor.css';

export interface ImageEditorProps extends LayerControllerProps, ToolbarProps {
  src: string;
  dimension: Dimension;
  defaultTool?: string;
  addOnClick?: boolean;
  selectTool?: () => void;
  onLayerAdd?: (layer: Layer, layers: Layer[]) => void;
  disabled?: boolean
}

const ImageEditor: FC<ImageEditorProps> = ({dimension, src, tools, layers, customTools, defaultTool, onLayerAdd}) => {
  const contextValue = useImageEditorContextValue({customTools, defaultTool: defaultTool || tools?.[0] || '', onLayerAdd})
  useEffect(() => {
    contextValue.updateLayers(layers as Layer[])
  }, [contextValue, layers])
  return <div className='container' style={{...dimension}} ref={(contextValue.setElement)}>
    <img className="source-image" src={src} alt=''/>
    <ImageEditorContext.Provider value={contextValue}>
      <LayerController layers={contextValue.layers}/>
      {(tools?.length || 0) > 1 && <Toolbar tools={tools} customTools={customTools}/>}
    </ImageEditorContext.Provider>
  </div>;
};

export default ImageEditor;
