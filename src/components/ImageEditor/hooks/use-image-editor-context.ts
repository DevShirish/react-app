import { useContext } from "react";
import ImageEditorContext from "../context/image-editor-context";

const useImageEditorContext = () => useContext(ImageEditorContext)

export default useImageEditorContext