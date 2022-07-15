import { FC, lazy, Suspense, useState } from "react";
import "./PickerAndEditor.css";
import NOOB from "../../components/NOOB";

const Editor = lazy(() => import("./Editor/containers/Editor"))
const Dropzone = lazy(() => import("../../components/Dropzone"))

const ALLOWED_IMAGE_FORMATS = { "image/*": [".png", ".jpg", ".jpeg"] };

/**
 * This is component which would load image and show editor for it
 */
const PickerAndEditor: FC = () => {
  const [img, setImg] = useState("");
  return (
    <div className="picker-and-editor-container">
      <Suspense fallback={<NOOB/>}>
      {/** Check if image present if present then show editor else dropzone */}
      {img ? (
        <Editor src={img} />
      ) : (
        <Dropzone
          accept={ALLOWED_IMAGE_FORMATS}
          onDrop={(files) => setImg(URL.createObjectURL(files[0]))}
          multiple={false}
        />
      )}
      </Suspense>
    </div>
  );
};

export default PickerAndEditor;
