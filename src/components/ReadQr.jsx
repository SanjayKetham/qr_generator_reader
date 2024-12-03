import { useState, useRef } from "react";
import QrScanner from "qr-scanner";

const ReadQr = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState("");
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    try {
      const result = await QrScanner.scanImage(selectedFile);
      setData(result);
    } catch (error) {
      setData("Failed to scan the QR code. Please try again with a clear image.");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="text-center mb-4">Read QR Code</h3>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="btn"
          style={{
            background: "linear-gradient(to right, #6a0dad, #000000)", // Purple to Black gradient
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Upload QR Code
        </button>

        <input
          ref={fileRef}
          onChange={handleChange}
          type="file"
          accept=".png, .jpg, .jpeg"
          className="d-none"
        />

        {file && (
          <div className="mt-4">
            <h6>Uploaded QR Code:</h6>
            <img
              src={URL.createObjectURL(file)}
              alt="QR Code"
              className="img-fluid"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </div>
        )}

        {data && (
          <div className="mt-4">
            <h6>Scanned Data:</h6>
            <p className="text-success small fw-bold">{data}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadQr;
