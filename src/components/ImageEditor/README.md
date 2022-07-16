# Image Editor

This component is a standalone component used for editing images.

## Component Diagram

![Component Diagram](https://user-images.githubusercontent.com/19300498/179340092-3caa4a11-0d2b-4f7f-b421-8da524fd7606.png)

## Inputs

1. Image src as input
2. Tools array that needs be shown in toolbar - if tools are more than 1 Toolbar will show up
3. Custom tools map - This is map of tool name and its ToolConfig that will be shown in toolbar
4. default Tool - Default that is selected if not provided 0th from tools array is considered as default

## Emitters / Events / Callbacks

1. On Layer Add - This callback will be called when a layer is added in image window

## Architecture of Implementation

Image editor context is used for internal component communication as custom tools also can access this context and would be useful in 
complex tools instead of drilling down props.

Layers addition logic and viewing logic is handled in Layer Controller.

Image and layers are placed relative to component's position. and all layer positions are calculated in percentages w.r.t to container. 
Whenever a new layer will be added it's position is calculated in percentages.

## Known bugs

1. We can put layers in container since image and container height/width are different.
2. Layers added are not pixel perfect because of above bug
