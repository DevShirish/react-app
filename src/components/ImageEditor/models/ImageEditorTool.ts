import { ElementType } from "react";
import Dimension from "./Dimension";
import ImageEditorToolElement from "./ImageEditorToolElement";

export interface ImageEditorTool {
    label: string;
    toolbarIcon: ElementType;
    element?: ElementType<ImageEditorToolElement>;
    defaultDimension?: Dimension
  }
  