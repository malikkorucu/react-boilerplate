import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export const Dropzone = (props: any) => {
  const [files, setFiles] = useState([]);
  const { onChange } = props;
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles: any) => {
        setFiles(
          acceptedFiles.map((file: any) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  useEffect(() => {
    onChange && onChange(files);
  }, [files]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    if (props.reset) {
      setFiles([]);
    }
  }, [props.reset]);

  const thumbs = files.map((file: any) => (
    <img
      key={file?.name}
      width={80}
      height={80}
      src={file.preview}
      className="rounded me-3"
    />
  ));

  //   useEffect(() => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  //   }, [files]);

  return (
    <div className="cursor-pointer position-relative" style={{ height: 100 }}>
      <div {...getRootProps({ style } as any)} className="h-100">
        <input {...getInputProps()} />

        {!files.length && !props.selectedImageUrl && (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute start-0 bottom-0 end-0 top-0">
            <p className="m-0 p-0">Select Image</p>
          </div>
        )}

        <aside className="w-100 h-100 d-flex align-items-center px-2">
          {thumbs.length
            ? thumbs
            : props.selectedImageUrl && (
                <img
                  src={props.selectedImageUrl}
                  className="img-thumbnail w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              )}
        </aside>
      </div>
    </div>
  );
};
