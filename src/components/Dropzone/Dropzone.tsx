import ThirdPartyDropzone, { Accept } from "react-dropzone";
import { FC } from "react";
import './Dropzone.css'

export interface DropzoneProps {
  accept?: Accept;
  onDrop: (files: File[]) => void;
  multiple?: boolean;
}

const Dropzone: FC<DropzoneProps> = ({ accept, onDrop, multiple }) => {
  return (
    <ThirdPartyDropzone
      accept={accept}
      onDrop={(files) => onDrop(files)}
      multiple={multiple}
    >
      {({ getRootProps, getInputProps }) => (
        <div className="dropzone-container">
          <div
            {...getRootProps({
              className: "dropzone"
            })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      )}
    </ThirdPartyDropzone>
  );
};

export default Dropzone;
