import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your name here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QrCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QrCode;
