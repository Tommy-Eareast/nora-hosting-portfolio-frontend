import { useDropzone } from "react-dropzone";

export const FileUpload = ({ onFileSelect }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: { "image/*": [] },
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                onFileSelect(reader.result);
            };
        },
    });

    return (
        <div
            {...getRootProps()}
            style={{ border: "2px dashed gray", padding: 10 }}
        >
            <input {...getInputProps()} />
            <p>Drag & drop an image, or click to select</p>
        </div>
    );
};
