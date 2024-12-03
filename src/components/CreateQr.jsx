import { useState } from "react";
import QRCode from "qrcode";

const CreateQr = () => {
  const [qrValue, setQrValue] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qrValue) {
      alert("Please enter text or URL");
      return;
    }

    const response = await QRCode.toDataURL(qrValue);
    setQrImageUrl(response);
    setQrValue("");
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="text-center mb-4">Generate QR Code</h3>
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <input
          type="text"
          className="form-control me-3"
          placeholder="Enter text or URL"
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          style={{
            background: "linear-gradient(to right, #6a0dad, #000000)", // Purple to Black gradient
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            minWidth: "150px",
          }}
        >
          Generate
        </button>
      </form>

      {qrImageUrl && (
        <div className="mt-4 text-center">
          <a href={qrImageUrl} download="qr.png">
            <img src={qrImageUrl} alt="QR Code" className="img-fluid" />
          </a>
          <p className="mt-2">Click the image to download the QR Code</p>
        </div>
      )}
    </div>
  );
};

export default CreateQr;
